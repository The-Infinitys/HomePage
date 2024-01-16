var Scratch = Scratch || {};

Scratch.FlashAppView = Backbone.View.extend({
  initialize: function(options) {
    this.loggedInUser = Scratch.LoggedInUser;
    this.isEditMode = Scratch.INIT_DATA.PROJECT.is_new;

    this.ASobj = swfobject.getObjectById(this.$el.attr('id'));  // get the SWF object
    this.setContextMenuHandler();

    if (this.model.id != null) {
      this.loadProjectInSwf();
    } else {
      this.ASobj.AScreateProject(this.loggedInUser.get('username'));
    }

    this.setLoggedInUser();

    if (this.options.editor) {  // if supporting editor and player
      _.bindAll(this, 'beforeUnload', 'setLoggedInUser');
      try {
        new Scratch.Views.TipBar({ model: new Scratch.Models.TipBar() });
      } catch(e){
        console.log('Tip bar failed to load.  Check code for errors')
      }
      this.model.bind('change:title', this.setTitle, this);
      this.loggedInUser.bind('change', this.setLoggedInUser, this);
      $(window).on('beforeunload', this.beforeUnload);

      // hook up download button on project play page
      $('#new-scratch-project .button').on('click', this.ASobj.ASdownload);
    }
  },

  setLoggedInUser: function() {
    // Let flash know the new logged in user
    this.ASobj.ASsetLoginUser(this.loggedInUser.get('username'), this.lastEditorOp);
    this.lastEditorOp = '';
    // reload the page when we go int player mode
    // AL - commenting out.  Can't figure out why this exists.
    // Together with the "player()" function in /js/apps/project/main.js,
    // It's reloading the page on every other "see outside" click.
    // if (this.ASobj.ASisEditMode()) {
    //   this.reload = true;
    // }
  },

  // sets handlers to execute the custom swf context menus correctly across browsers
  setContextMenuHandler:function () {
    function isRightClickInEditor(e){
      return e.pageY > 24 && (e.which > 1 || e.ctrlKey);
    };

    var self=this;
    if(self.el.addEventListener){
      // AL - use addEventListener since jquery only binds to bubble, not capture.
      // stopPropagation() on the capture phase prevents the event from
      // propagating down to the SWF and firing the right click menu.
      self.el.parentNode.addEventListener("mousedown", function (e) {
        var event = $.Event("mousedown",e);  // normalize event with jquery for position and button checking
        if(isRightClickInEditor(event)){
          e.stopPropagation();  // prevent the event from propagating to the swf;
          e.preventDefault(); // Chrome wants preventDefault too
          self.customContextMenu(event);
        }
      }, true); // usecapture===true
    } else { // IE8 doesn't have a capture phase, but it does have a setCapture workaround
      self.$el.parent().on('mousedown',function(e){
        if(isRightClickInEditor(e)){
          this.setCapture(); // set focus to container elem to prevent swf from receiving right click
        }
      }).on('mouseup',function(e){
        if(isRightClickInEditor(e)){
          self.customContextMenu(e);
          this.releaseCapture(); // return focus to swf
        }
      }).on('contextmenu',function(e){ // should trigger when setCapture has focused the parent element
        e.preventDefault(); // prevent the default context menu on the container html element
      });
    }
  },

  customContextMenu:function (e) {
    if (!this.ASobj.ASisEditMode()) return; // do nothing if not in editor
    var offset = $(this.ASobj).offset(),
      scale = (e.screenX - (window.screenX||window.screenLeft||-5)) / e.pageX, // accounts for window positioned away from left side of screen
      appX = scale * (e.pageX - offset.left),
      appY = scale * (e.pageY - offset.top),
      isMac = navigator.userAgent.indexOf('Macintosh') > -1,
      notChrome = navigator.userAgent.indexOf('Chrome') == -1;
      this.ASobj.ASrightMouseDown(appX, appY, isMac && notChrome);
  },

  setEditMode: function(isEditMode) {
    this.isEditMode = isEditMode;
    this.ASobj.ASsetEditMode(isEditMode);
    if (isEditMode) { // switch to editor
      $('body').scrollTop(0); // make sure top is viewable in editor
      $('body').removeClass('editor').addClass('editor black');
      // skip animation for safari 5 - for some reason .animate on opacity breaks click/mouse on swf
      var is_safari = navigator.userAgent.indexOf('Safari') > -1;
      var is_chrome = navigator.userAgent.indexOf('Chrome') > -1; // chrome lists safari in userAgent!
      var is_version_5 = navigator.userAgent.indexOf('Version/5') > -1;
      if (is_chrome && is_safari) is_safari = false;
      if (!(is_safari && is_version_5)) {
        $('body #pagewrapper').animate({opacity: 1}, 1000, function() {
          $('body').removeClass('black white');
          $('body #pagewrapper').css('opacity', '1');
        });
      } else {
        $('body #pagewrapper').css('opacity', 1);
        $('body').removeClass('white black');
      }

      try {
        tip_bar_api.show();
      } catch(e){
        console.log('Tip bar failed to load.  Check code for errors')
      }

    } else if (Scratch.FlashApp.model.id == Scratch.INIT_DATA.PROJECT.model['id']) {  // switch to player
      $('body').removeClass('editor white').addClass('viewer');
      if (this.ASobj.ASwasEdited()) {
        this.model.save({datetime_modified: Date.now()});
      }
      try {
        tip_bar_api.hide();
      } catch(e){
        console.log('Tip bar failed to load.  Check code for errors')
      }
    }else {
      JSredirectTo(Scratch.FlashApp.model.id, false, {'title': Scratch.FlashApp.model.get('title')});
    }
  },

  beEmbedded: function() {
    this.ASobj.ASsetEditMode(true);
  },

  setTitle: function() {
    this.model.save({visibility: 'visible'}); // move out of trash
    this.ASobj.ASsetTitle(this.model.get('title')); // then set the title in the flash
  },

  loadProjectInSwf: function() {
      this.ASobj.ASloadProject(this.model.get('creator'), this.model.id, this.model.get('title'), !(this.model.get('isPublished')), false);
  },

  beforeUnload: function(e) {
    // this method is called on beforeunload events and manually. When called
    // manually, no event argument is provided.
    if (!this.isEditMode && !e) return;
    if (!this.loggedInUser.authenticated) { // not logged in
        if (this.ASobj.ASisUnchanged()) return;
        return gettext('Your changes are NOT SAVED!\nTo save, stay on this page, then log in.');
    } else { // logged in
        if (this.model.get('creator') != this.loggedInUser.get('username')) { // editing another user's project
            if (this.ASobj.ASisUnchanged()) return;
            if (this.isEditMode) {
                return gettext('Your changes are NOT SAVED!\nTo save, stay on this page, then click “Remix”.');
            } else {
                return gettext('Your changes are NOT SAVED!\nTo save, stay on this page, click “See inside”, then click “Remix”.');
            }
        }
        // editing my own project
        if (this.ASobj.ASwasEdited()) {
            // if project was edited, record the last modification time
            this.model.save({datetime_modified: Date()}, {async: false});
        }
        var isUntitled = this.model.get('title').indexOf('Untitled') == 0;
        if (isUntitled && !this.model.get('isPublished') && this.ASobj.ASisEditMode() && this.ASobj.ASisEmpty()) {
            // this is an untitled, unpublished, empty project -- move to trash (but move out of trash if renamed)
            this.model.save({visibility: 'trshbyusr'}, {async: false});
            return;
        }
        if (this.ASobj.ASisUnchanged()) return;
        return gettext('Your changes are NOT SAVED!\nTo save, stay on this page, then click “Save now.”');
    }
  },

  syncSaveProject: function() {
    if (!this.ASobj.ASshouldSave()) return;
    var projData = this.ASobj.ASgetProject();
    if ((projData == null) || (projData.length == 0)) return;
    $.ajax({
        url: '/internalapi/project/' + this.model.get('id') + '/set/',
        type: 'POST',
        async: false, // must be synchronous to ensure that save completes before page unloads
        data: projData
    });
  },

  sendReport: function(url, data) {
    data['thumbnail'] = this.ASobj.ASdumpRecordThumbnail();
    var jsonData = JSON.stringify(data);
    $.ajax({
      url: url,
      type: 'POST',
      data: jsonData,
      success: function(responseData) {
        _gaq.push(['_trackEvent', 'project', 'report_add']);
        if (responseData.moderation_status === 'notreviewed') {
            window.location.reload();
        }
      },
      contentType: 'application/json',
      error: function(xhr) { return xhr.errorThrown; }
    });
  }
});

function JStrackEvent(messageKey, extraDataString) {
  _gaq.push(['_trackEvent', 'editor', messageKey, extraDataString]);
}

function JSsetEditMode(isEditorMode) {
  Scratch.FlashApp.isEditMode = isEditorMode;
  if (isEditorMode) {
    app.navigate('editor', {trigger: true, replace: true});
  } else {
    if (Scratch.FlashApp.model.id == Scratch.INIT_DATA.PROJECT.model['id']) {
      app.navigate('player', {trigger: true, replace: true});
    } else {
      JSredirectTo(Scratch.FlashApp.model.id, false, {'title': Scratch.FlashApp.model.get('title')});
    }
  }
  return true;
}

// Notification system for the SWF
var notification = null;

function JSsetProjectBanner(message, hasLink) {
    var time = Math.max(4000, message.split(' ').length * 250);
    options = {timeout : time, waitForMove: true};
    message += '<iframe class="iframeshim" frameborder="0" scrolling="no"><html><head></head><body></body></html></iframe>';
    humane.el = $('div.humane')[0]

    if (notification) {
        // TODO: Don't remove a notification with the same message.  Simply update it's timeout if it has one.
        notification.remove(function() {
            notification = humane.log(message, options);
        });
    }
    else {
        notification = humane.log(message, options);
    }
}

function JSsetPresentationMode(isPresentationMode) {
  if (isPresentationMode) {
    app.navigate('fullscreen', {trigger: true});
  } else {
    app.navigate(Scratch.FlashApp.isEditMode ? 'editor' : 'player', {trigger: true});
  }
  return true;
}

function JSeditTitle(str) {
    Scratch.FlashApp.model.save({title: str, visibility: 'visible'}); // move out of trash
}

function JSlogin(lastEditorOperation, username) {
  Scratch.FlashApp.lastEditorOp = lastEditorOperation;
  $('#login-dialog').modal('show');
  $('#login-dialog button').show();
  if(username) {
      $('#login-dialog input[name=username]').val(username);
      $('#login-dialog input[name=password]').val('');
      $('#login-dialog input[name=password]').focus();
  }
}

function JSjoinScratch(lastEditorOperation) {
    Scratch.FlashApp.lastEditorOp = lastEditorOperation;
    launchRegistration();
}

function JSlogout() {
  $.ajax({
    url: '/accounts/logout/',
    type: 'POST',
    success: function (data, status, xhr) {
      window.location.href = '/';
    }
  });
}

function JSdownloadProject() {
    Scratch.FlashApp.ASobj.ASdownload();
}

function JSremixProject() {
  var remix_action = function(){
    Scratch.FlashApp.ASobj.ASremixProject();
  }
  if(Scratch.INIT_DATA.HAS_NEVER_REMIXED){
    $("#remix-modal").modal("show")
    .find(".button").click(function(){
      remix_action();
      $("#remix-modal").modal("hide");
    });
  }else{
    remix_action();
  }
  _gaq.push(['_trackEvent', 'project', 'remix']);
}

function JSshareProject() {
  if (Scratch.INIT_DATA.IS_IP_BANNED) {
    $('#ip-mute-ban').modal();
    return;
  } else if (Scratch.INIT_DATA.PROJECT.is_permcensored) {
    var reshare_dialog = _.template($('#template-permacensor-reshare-dialog').html());
    $(reshare_dialog()).dialog({
      title: "Cannot Re-Share Project",
      buttons: {
        "Ok": function(){$(this).dialog("close")}
      }
    });
    return;
  } else if (!Scratch.INIT_DATA.IS_SOCIAL) {
    openResendDialogue(); // defined in account-nav.js
    return;
  }
  $.ajax({
    type: "POST",
    url: Scratch.FlashApp.model.url() + 'share/',
    success: function () {
      Scratch.FlashApp.model.set({isPublished: true});
      window.location.href = '/projects/' + Scratch.FlashApp.model.get('id') + '/';
    },
    error: function (xhr) {
      return xhr.errorThrown;
    }
  });
}

function JSlogImageAdded(project_id, file_type, is_uploaded) {
  if (project_id.length < 1)
    project_id = -1;
  else
    project_id = parseInt(project_id);

  var jsonData = {
    'file_source_model_id': project_id,
    'file_source_model': 'Project',
    'file_type': file_type}
  jsonData['file_source_type'] = is_uploaded ? 2 : 3;

}

function JSredirectTo(loc, inEditor, model) {
  setTimeout(function(){
      if (!isNaN(loc) || (loc == 'editor')) {
        Scratch.FlashApp.model = app.projectModel = new Scratch.ProjectThumbnail(model);
        var hardRedirect = !inEditor && loc != Scratch.INIT_DATA.PROJECT.model['id'];
        var pageTitle = Scratch.FlashApp.model.get('title') + " " + gettext("on Scratch");
        var url = '/projects/' + loc
        if (window.location.pathname == url && (
          inEditor && window.location.hash == "#editor" ||
          !inEditor && window.location.hash != "#editor")) {
          // Ensure the URL is exactly the same. We may be switching between the editor and the player.
          return;
        } else {
            url = url + (inEditor ? '/#editor' : '');
            if (!!(window.history && history.replaceState && !hardRedirect)) {
                history.replaceState(model, pageTitle, url);
                document.title = pageTitle; // Chrome's replaceState doesn't do this for us.
            } else {
                window.location.href = url;
            }
        }
        return;
      }
      switch (loc) {
        case 'about':
          window.location.href = '/about/';
          break;
        case 'home':
          window.location.href ='/';
          break;
        case 'logout':
          window.location.href =  '/accounts/logout/';
          break;
        case 'mystuff':
          window.location.href = '/mystuff/';
          break;
        case 'myclasses':
          window.location.href = '/educators/classes/';
          break;
        case 'myclass':
          window.location.href = '/classes/' + Scratch.INIT_DATA.LOGGED_IN_USER.model.classroom_id + '/';
          break
        case 'profile':
          window.location.href = '/users/' + Scratch.LoggedInUser.get('username');
          break;
        case 'settings':
          window.location.href = '/accounts/password_change/';
          break;
      }
  }, 100);
}

// Support for URL and File Drag-n-Drop
// Note: File drag-n-drop only works on some browsers (e.g. FF12 and Chrome 19 but not FF8 or Safari 5.0.5)
function JSsetFlashDragDrop(enable) {
    Scratch.FlashApp.ASobj.ondragover = function(evt) { evt.preventDefault(); evt.stopPropagation() }
    Scratch.FlashApp.ASobj.ondrop = enable ? handleDrop : null;
}

function handleDrop(evt) {
    var x = evt.clientX;
    var y = evt.clientY;
    var textData = evt.dataTransfer.getData('Text');
    var urlData = evt.dataTransfer.getData('URL');

    if (textData) Scratch.FlashApp.ASobj.ASdropURL(textData, x, y);
    else if (urlData) FA.obj.ASdropURL(urlData, x, y);

    var fileCount = evt.dataTransfer.files.length;
    for (var i = 0; i < fileCount; i++) {
        loadFile(evt.dataTransfer.files[i], x, y);
    }
    if (evt.stopPropagation) evt.stopPropagation();
    else evt.cancelBubble = true;
}

function loadFile(file, x, y) {
    function loadError(evt) {
        console.log('Error loading dropped file: ' + evt.target.error.code);
    }
    function loadEnd(evt) {
        var data = evt.target.result;
        if (data.length > 0) Scratch.FlashApp.ASobj.ASdropFile(fileName, data, x, y);
    }
    if (window.FileReader == null) {
        console.log('FileReader API not supported by this browser');
        return;
    }
    var fileName = ('name' in file) ? file.name : file.fileName;
    var reader = new FileReader();
    reader.onerror = loadError;
    reader.onloadend = loadEnd;
    reader.readAsDataURL(file);
}

function JSsetProjectStats(scripts, sprites, usesCloudData, oldScratchProjectUrl) {
  $('#script-count').html(scripts);
  $('#sprite-count').html(sprites);

  if (usesCloudData) {
      $('#cloud-log').show();
  }
  else {
      $('#cloud-log').hide();
  }

  if (oldScratchProjectUrl) {
    $('#old-scratch-project').removeClass('hide');
    $('#old-scratch-project .button').attr('href', oldScratchProjectUrl);
    $('#old-scratch-project').show();

    $('#new-scratch-project').hide();
  }
}

// Cloud data helpers
function JScloudDataSend(data) {
    if (this.cloudDataConnection === undefined) {
        console.log('Attempt to send Cloud data calls before initialization');
        return;
    }

    if (this.cloudDataConnection) this.cloudDataConnection.send(data+'\n');
}

function JScloudDataConnect(cloudDataServerUrl) {
    if (window.WebSocket === null) {
        console.error('Websockets support not available in this browser.');
        return;
    }

    // fall back to to insecure web socket if current connection is insecure
    if (location.protocol === 'http:') {
        this.cloudDataConnection = new WebSocket('ws://' + cloudDataServerUrl);
    } else {
        this.cloudDataConnection = new WebSocket('wss://' + cloudDataServerUrl);
    }

    this.cloudDataConnection.onopen = function (event) {
        Scratch.FlashApp.ASobj.ASonCloudDataConnect();
    }
    this.cloudDataConnection.onerror = function (event) {
        this.cloudDataConnection = null;
        console.info('Websocket error: "',event,'" You may be sending data too fast, or the socket timed out.');
        Scratch.FlashApp.ASobj.ASonCloudDataError();
    }
    this.cloudDataConnection.onclose = function (event) {
        this.cloudDataConnection = null;
        Scratch.FlashApp.ASobj.ASonCloudDataClose();
    }
    this.cloudDataConnection.onmessage = function (event) {
        Scratch.FlashApp.ASobj.ASonCloudDataData(event.data);
    }
}
