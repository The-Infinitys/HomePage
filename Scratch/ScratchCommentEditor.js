  //ScratchCommentEditor
//htmlのソース
/*
<div class="flex-row comments-list">
                    <div class="flex-row comment-container">
                      <div class="flex-row comment" id="comments-376346782">
                        <a href="/users/The_Infinitys">
                          <img class="avatar" src="https://cdn2.scratch.mit.edu/get_image/user/116605060_60x60.png">
                        </a>
                        <div class="flex-row comment-body column">
                          <div class="flex-row comment-top-row">
                            <a class="username" href="/users/The_Infinitys">The_Infinitys</a>
                            <div class="action-list">
                              <span class="comment-delete">
                                <span>削除</span>
                              </span>
                              <span class="comment-report">
                                <span>報告</span>
                              </span>
                            </div>
                          </div>
                          <div class="comment-bubble">
                            <span class="comment-content">
                              <span class="emoji-text">Welcome 2 </span>
                              <a href="/users/The_Infinitys">@The_Infinitys</a>
                              <span class="emoji-text">! 
                                <img src="/images/emoji/gobo.png" class="emoji" alt="gobo emoji">
                              </span>
                            </span>
                            <div class="flex-row comment-bottom-row">
                              <span class="comment-time">
                                <span>12 時間前</span>
                              </span>
                              <span class="comment-reply">
                                <span>返信</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex-row comment-container">
                      <div class="flex-row comment" id="comments-376346199">
                        <a href="/users/The_Infinitys">
                          <img class="avatar" src="https://cdn2.scratch.mit.edu/get_image/user/116605060_60x60.png">
                        </a>
                        <div class="flex-row comment-body column">
                          <div class="flex-row comment-top-row">
                            <a class="username" href="/users/The_Infinitys">The_Infinitys</a>
                            <div class="action-list">
                              <span class="comment-delete">
                                <span>削除</span>
                              </span>
                              <span class="comment-report">
                                <span>報告</span>
                              </span>
                            </div>
                          </div>
                          <div class="comment-bubble">
                            <span class="comment-content">
                              <span class="emoji-text">test</span>
                            </span>
                            <div class="flex-row comment-bottom-row">
                              <span class="comment-time">
                                <span>12 時間前</span>
                              </span>
                              <span class="comment-reply">
                                <span>返信</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="flex-row replies column">
                        <div class="flex-row comment" id="comments-376473737">
                          <a href="/users/The_Infinitys">
                            <img class="avatar" src="https://cdn2.scratch.mit.edu/get_image/user/116605060_60x60.png">
                          </a>
                          <div class="flex-row comment-body column">
                            <div class="flex-row comment-top-row">
                              <a class="username" href="/users/The_Infinitys">The_Infinitys</a>
                              <div class="action-list">
                                <span class="comment-delete">
                                  <span>削除</span>
                                </span>
                                <span class="comment-report">
                                  <span>報告</span>
                                </span>
                              </div>
                            </div>
                            <div class="comment-bubble">
                              <span class="comment-content">
                                <span class="emoji-text"></span>
                                <a href="/users/The_Infinitys">@The_Infinitys</a>
                                <span class="emoji-text">reply</span>
                              </span>
                              <div class="flex-row comment-bottom-row">
                                <span class="comment-time">
                                  <span>今</span>
                                </span>
                                <span class="comment-reply">
                                  <span>返信</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
*/
/*
<div class="flex-row comment-container">
                      <div class="flex-row comment" id="comments-376481354">
                        <a href="/users/The_Infinitys">
                          <img class="avatar" src="https://cdn2.scratch.mit.edu/get_image/user/116605060_60x60.png">
                        </a>
                        <div class="flex-row comment-body column">
                          <div class="flex-row comment-top-row">
                            <a class="username" href="/users/The_Infinitys">The_Infinitys</a>
                            <div class="action-list">
                              <span class="comment-delete">
                                <span>削除</span>
                              </span>
                              <span class="comment-report">
                                <span>報告</span>
                              </span>
                            </div>
                          </div>
                          <div class="comment-bubble">
                            <span class="comment-content">
                              <span class="emoji-text">'_meow_'</span>
                            </span>
                            <div class="flex-row comment-bottom-row">
                              <span class="comment-time">
                                <span>24 分前</span>
                              </span>
                              <span class="comment-reply">
                                <span>返信</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
*/
class ScratchCommentEditor{
  constructor(){
    this.emojiCode=[
      '_meow_',
      '_gobo_',
      '_10mil_',
      '_apple_',
      '_waffle_',
      '_camera_',
      '_taco_',
      '_sushi_',
      '_broccoli_',
      '_pizza_',
      '_candycorn_',
      '_map_',
      '_compass_',
      '_suitcase_',
      '_binoculars_',
      '_B)_',
      '_:)_',
      '_:D_',
      '_:P_',
      '_;P_',
      '_:P_',
      '_P:_',
      '_:3_',
      '_<3_',
      '_**_',
      '_:))_',
      '_:D<_',
      '_BLM_',
      '_pride_'
    ]
    this.emojiSource=[
      '<img src="/images/emoji/meow.png" class="emoji" alt="meow emoji">' ,
      '<img src="/images/emoji/gobo.png" class="emoji" alt="gobo emoji">',
      '<img src="/images/emoji/10mil.png" class="emoji" alt="10mil emoji">', 
      '<img src="/images/emoji/apple.png" class="emoji" alt="apple emoji">',
      '<img src="/images/emoji/waffle.png" class="emoji" alt="waffle emoji">', 
      '<img src="/images/emoji/camera.png" class="emoji" alt="camera emoji">',
      '<img src="/images/emoji/taco.png" class="emoji" alt="taco emoji">',
      '<img src="/images/emoji/sushi.png" class="emoji" alt="sushi emoji">', 
      '<img src="/images/emoji/broccoli.png" class="emoji" alt="broccoli emoji">', 
      '<img src="/images/emoji/pizza.png" class="emoji" alt="pizza emoji">',
      '<img src="/images/emoji/candycorn.png" class="emoji" alt="candycorn emoji">', 
      '<img src="/images/emoji/map.png" class="emoji" alt="map emoji">',
      '<img src="/images/emoji/compass.png" class="emoji" alt="compass emoji">',
      '<img src="/images/emoji/suitcase.png" class="emoji" alt="suitcase emoji">',
      '<img src="/images/emoji/binoculars.png" class="emoji" alt="binoculars emoji">', 
      '<img src="/images/emoji/cool-cat.png" class="emoji" alt="cool-cat emoji">',
      '<img src="/images/emoji/cat.png" class="emoji" alt="cat emoji">',
      '<img src="/images/emoji/aww-cat.png" class="emoji" alt="aww-cat emoji">',
      '<img src="/images/emoji/tongue-out-cat.png" class="emoji" alt="tongue-out-cat emoji">', 
      '<img src="/images/emoji/wink-cat.png" class="emoji" alt="wink-cat emoji">',
      '<img src="/images/emoji/tongue-out-cat.png" class="emoji" alt="tongue-out-cat emoji">', 
      '<img src="/images/emoji/upside-down-cat.png" class="emoji" alt="upside-down-cat emoji">', 
      '<img src="/images/emoji/huh-cat.png" class="emoji" alt="huh-cat emoji">',
      '<img src="/images/emoji/love-it-cat.png" class="emoji" alt="love-it-cat emoji">', 
      '<img src="/images/emoji/fav-it-cat.png" class="emoji" alt="fav-it-cat emoji">',
      '<img src="/images/emoji/rainbow-cat.png" class="emoji" alt="rainbow-cat emoji">', 
      '<img src="/images/emoji/pizza-cat.png" class="emoji" alt="pizza-cat emoji">',
      '<img src="/images/emoji/blm.png" class="emoji" alt="blm emoji">',
      '<img src="/images/emoji/pride.png" class="emoji" alt="pride emoji">',
    ]
  }

  addcomment(userName,comment){
    let xml='';
    let str=comment;
    for (let i=0;i<this.emojiCode.length;++i){
      str=str.replace(this.emojiCode[i],this.emojiSource[i]);
    }
    return str;
  }
}
var x=new ScratchCommentEditor();
console.log(x.addcomment('s','This is _meow_'))