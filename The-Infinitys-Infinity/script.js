const init_header = function () {
  //headerの初期化
  const header_text = `
    <a href="/" aria-label="Home">
      <img id="headerLogo" class="The-Infinitys" src="/image/The-Infinitys.webp" alt="" onerror="generate_Infinitys()" />
    </a>
    <h1>The Infinity's</h1>
    <button
      id="hamburger_menu_button"
      aria-label="hamburger_menu_button"
      onclick="hamburger_menu()">
      <div
      class="hamburger_menu_icon"
      id="open_hamburger_menu">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          stroke-width="10">
          <line x1="10" y1="20" x2="90" y2="20" />
          <line x1="10" y1="50" x2="90" y2="50" />
          <line x1="10" y1="80" x2="90" y2="80" />
        </svg>
      </div>
      <div
      class="hamburger_menu_icon"
      id="close_hamburger_menu"
      style="opacity:0;"
      >
        <svg
          viewBox="-60 -60 120 120"
          fill="none"
          >
          <ellipse cx="-25" cy="0" rx="25" ry="20" stroke-width="2" />
          <ellipse cx="25" cy="0" rx="25" ry="20" stroke-width="2" />
          <circle cx="0" cy="0" r="50" stroke-width="4" />
        </svg>
      </div>
    </button>
    <!--hamburger menu-->
    <table id="hamburger_menus">
      <tr>
        <th scope="col">
          <!--icon-->
        </th>
          <!--name-->
        <th scope="col">
        </th>
      </tr>
      <tr>
        <th>
          <img
            alt=""
            loading="lazy"
            class="hamburger_menus-contents-icons"
            src="data:image/svg+xml;base64,PHN2ZwogIHZlcnNpb249IjEuMSIKICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCiAgd2lkdGg9IjMyMS41IgogIGhlaWdodD0iMzIxLjUiCiAgdmlld0JveD0iMCwwLDMyMS41LDMyMS41Ij4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzkuMjUsLTE5LjI1KSI+CiAgICA8ZwogICAgICBkYXRhLXBhcGVyLWRhdGE9J3siaXNQYWludGluZ0xheWVyIjp0cnVlfScKICAgICAgZmlsbD0ibm9uZSIKICAgICAgZmlsbC1ydWxlPSJub256ZXJvIgogICAgICBzdHJva2UtbGluZWNhcD0iYnV0dCIKICAgICAgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIKICAgICAgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIgogICAgICBzdHJva2UtZGFzaGFycmF5PSIiCiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0PSIwIgogICAgICBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+CiAgICAgIDxwYXRoCiAgICAgICAgZD0iTTg2LDE4MGMwLC04NS4wNTE4NSA2OC45NDgxNSwtMTU0IDE1NCwtMTU0Yzg1LjA1MTg1LDAgMTU0LDY4Ljk0ODE1IDE1NCwxNTRjMCw4NS4wNTE4NSAtNjguOTQ4MTUsMTU0IC0xNTQsMTU0Yy04NS4wNTE4NSwwIC0xNTQsLTY4Ljk0ODE1IC0xNTQsLTE1NHoiCiAgICAgICAgc3Ryb2tlPSIjODg4ODg4IgogICAgICAgIHN0cm9rZS13aWR0aD0iMTMuNSIgLz4KICAgICAgPHBhdGgKICAgICAgICBkPSJNMjQwLDE4MGMwLDI1LjY4MTI0IC0zMy4zMTAwMSw0Ni41IC03NC40LDQ2LjVjLTQxLjA4OTk5LDAgLTc0LjQsLTIwLjgxODc2IC03NC40LC00Ni41YzAsLTI1LjY4MTI0IDMzLjMxMDAxLC00Ni41IDc0LjQsLTQ2LjVjNDEuMDg5OTksMCA3NC40LDIwLjgxODc2IDc0LjQsNDYuNXoiCiAgICAgICAgc3Ryb2tlPSIjODg4ODg4IgogICAgICAgIHN0cm9rZS13aWR0aD0iNSIgLz4KICAgICAgPHBhdGgKICAgICAgICBkPSJNMzg4LjgsMTgwYzAsMjUuNjgxMjQgLTMzLjMxMDAyLDQ2LjUgLTc0LjQsNDYuNWMtNDEuMDg5OTgsMCAtNzQuNCwtMjAuODE4NzYgLTc0LjQsLTQ2LjVjMCwtMjUuNjgxMjQgMzMuMzEwMDIsLTQ2LjUgNzQuNCwtNDYuNWM0MS4wODk5OCwwIDc0LjQsMjAuODE4NzYgNzQuNCw0Ni41eiIKICAgICAgICBzdHJva2U9IiM4ODg4ODgiCiAgICAgICAgc3Ryb2tlLXdpZHRoPSI1IiAvPgogICAgPC9nPgogIDwvZz48L3N2Zwo+PCEtLXJvdGF0aW9uQ2VudGVyOjE2MC43NToxNjAuNzUtLT4K" />
        </th>
        <th><a aria-label="Home" href="/">Home </a></th>
      </tr>
      <tr>
        <th>
          <img
            alt=""
            class="hamburger_menus-contents-icons"
            src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI0NC44MTU0IgogIGhlaWdodD0iNjMuMTI0NjciIHZpZXdCb3g9IjAsMCw0NC44MTU0LDYzLjEyNDY3Ij4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjE3LjU5MjMsLTE0Ni4wMTA1OSkiPgogICAgPGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iIzg4ODg4OCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiCiAgICAgIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIKICAgICAgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPgogICAgICA8cGF0aCBkPSJNMjE4Ljg0MjMsMjA3Ljg4NTI3di01NS43NzA1M2g0Mi4zMTU0djU1Ljc3MDUzeiIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyLjUiIC8+CiAgICAgIDxwYXRoCiAgICAgICAgZD0iTTIyMC45MDczNywxODBjMCwtMTAuNTQ0NTcgOC41NDgwNywtMTkuMDkyNjMgMTkuMDkyNjQsLTE5LjA5MjYzYzEwLjU0NDU3LDAgMTkuMDkyNjMsOC41NDgwNiAxOS4wOTI2MywxOS4wOTI2M2MwLDEwLjU0NDU3IC04LjU0ODA2LDE5LjA5MjY0IC0xOS4wOTI2MywxOS4wOTI2NGMtMTAuNTQ0NTcsMCAtMTkuMDkyNjQsLTguNTQ4MDcgLTE5LjA5MjY0LC0xOS4wOTI2NHoiCiAgICAgICAgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgICA8cGF0aAogICAgICAgIGQ9Ik0yNDAsMTgwYzAsMy42MjM0NSAtNC4wNDU4Myw2LjU2MDgzIC05LjAzNjYyLDYuNTYwODNjLTQuOTkwNzgsMCAtOS4wMzY2MSwtMi45MzczOSAtOS4wMzY2MSwtNi41NjA4M2MwLC0zLjYyMzQ1IDQuMDQ1ODMsLTYuNTYwODMgOS4wMzY2MSwtNi41NjA4M2M0Ljk5MDc4LDAgOS4wMzY2MiwyLjkzNzM5IDkuMDM2NjIsNi41NjA4M3oiCiAgICAgICAgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiAvPgogICAgICA8cGF0aAogICAgICAgIGQ9Ik0yNTguMDczMjIsMTgwYzAsMy42MjM0NSAtNC4wNDU4Myw2LjU2MDgzIC05LjAzNjYxLDYuNTYwODNjLTQuOTkwNzgsMCAtOS4wMzY2MSwtMi45MzczOSAtOS4wMzY2MSwtNi41NjA4M2MwLC0zLjYyMzQ1IDQuMDQ1ODMsLTYuNTYwODMgOS4wMzY2MSwtNi41NjA4M2M0Ljk5MDc4LDAgOS4wMzY2MSwyLjkzNzM5IDkuMDM2NjEsNi41NjA4M3oiCiAgICAgICAgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiAvPgogICAgICA8cGF0aCBkPSJNMjI2LjM1NzE0LDE1Mi40MzkxN2wzLjg1NzE1LC02LjQyODU3aDE4Ljg1NzE0bDQuNTcxNDMsNi40Mjg1N3oiIGZpbGw9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMCIgLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjoyMi40MDc3MDAwMDAwMDAwMDY6MzMuOTg5NDA1MDAwMDAwMDA1LS0+" />
        </th>
        <th>
          <a href="/article/">Article </a>
        </th>
      </tr>
      <tr>
        <th>
          <img
            alt=""
            class="hamburger_menus-contents-icons"
            src="data:image/svg+xml;base64,PHN2ZwogIHZlcnNpb249IjEuMSIKICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCiAgd2lkdGg9IjU0LjgxODg1IgogIGhlaWdodD0iODEuOTQyMSIKICB2aWV3Qm94PSIwLDAsNTQuODE4ODUsODEuOTQyMSI+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIxMywtMTM5Ljk5OTkpIj4KICAgIDxnCiAgICAgIGRhdGEtcGFwZXItZGF0YT0neyJpc1BhaW50aW5nTGF5ZXIiOnRydWV9JwogICAgICBmaWxsLXJ1bGU9Im5vbnplcm8iCiAgICAgIHN0cm9rZT0ibm9uZSIKICAgICAgc3Ryb2tlLXdpZHRoPSIxIgogICAgICBzdHJva2UtbGluZWNhcD0iYnV0dCIKICAgICAgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIKICAgICAgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIgogICAgICBzdHJva2UtZGFzaGFycmF5PSIiCiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0PSIwIgogICAgICBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+CiAgICAgIDxwYXRoCiAgICAgICAgZD0iTTI2Ni43OCwxOTkuNDMyYy0zLjIzLDguOTUgLTEyLjAxLDE0LjM5IC0yNi4wOSwxNi4xN2MtMC42NCwwLjA4IC0xLjI3LDAuMTMgLTEuOSwwLjE1Yy0wLjgyLDEuMiAtMS44OSwyLjI0IC0zLjE1LDMuMDVjLTMuMywyLjExIC02LjM5LDMuMTQgLTkuNDQsMy4xNGMtNi4yNywwIC0xMy4wMiwtNC42OCAtMTMuMDIsLTE0Ljk2YzAsLTAuNyAwLjAzLC0xLjYxIDAuMSwtMi44N2MwLjAzLC0wLjU0IDAuMDYsLTAuOTYgMC4wNywtMS4yN2MtMC4xNywtMC43OCAtMC4yNiwtMS41NyAtMC4yNiwtMi4zN3YtNC44NGMwLC0wLjc5IDAuMDgsLTEuNTggMC4yNCwtMi4zN2MwLjAxLC0wLjY3IDAuMDQsLTEuNDIgMC4wOSwtMi4yNGMtMC4yNCwtMC44OCAtMC40MiwtMS45IC0wLjQyLC0zLjA0YzAsLTAuNTIgMC4wNCwtMS4wNCAwLjExLC0xLjU1YzAuMzgsLTIuNjggMS41NywtNS4zNyAzLjU4LC03LjUyYy0wLjY5LC0xLjkzIC0xLjA1LC0zLjk3IC0xLjA1LC02LjA2di01LjFjMCwtMi4wNyAwLjQxLC00LjY1IDIuNDIsLTExLjA3YzAuODQsLTIuNzYgMS4xMSwtMy42MiAxLjQ4LC00LjQyYzEuOTcsLTQuNDIgNC45NCwtNi42MyA3LjEsLTcuNzJjMy41MywtMS43NiA3LjMyLC0yLjY2IDExLjI2LC0yLjY2YzEuODIsMCAzLjU2LDAuMTkgNS4yMiwwLjU1YzAuNzQsLTAuNSAxLjUzLC0wLjkyIDIuMzcsLTEuMjdjMS4wNywtMC40NiAyLjIxLC0wLjc4IDMuNDcsLTAuOThjMy4xNSwtMC41NCA2LjQ4LDAuMTMgOS4zOCwxLjg5YzMuMDUsMS44NiA2LjU1LDUuNzIgNi4xMiwxMy42NmMtMC4wNywxLjQgLTAuMTksMy4yNyAtMC4zNyw1LjcxYy0wLjAxLDAuMDYgLTAuMDEsMC4xMiAtMC4wMiwwLjE4Yy0wLjE2LDEuNzcgLTAuMzksNC40MSAtMC43LDcuOWMwLjA4LDEuMzUgMC4wNSwyLjg2IC0wLjA3LDQuNjRjLTAuMDUsMC42OCAtMC4xNiwxLjM2IC0wLjM0LDIuMDJjLTAuMDQsMC4xNSAtMC4wOCwwLjI5IC0wLjEyLDAuNDJjMS4zNSwxLjczIDIuMjcsMy40NiAyLjksNC45NmMwLjU5LDEuMTkgMS4wOSwyLjU2IDEuNTMsNC4yM2MwLjE3LDAuNjMgMC4yOCwxLjI3IDAuMzMsMS45MmMwLjQ1LDUuNjEgMC4yMiw4LjkyIC0wLjgyLDExLjcyeiIKICAgICAgICBmaWxsPSIjZmZiZDAxIiAvPgogICAgICA8cGF0aAogICAgICAgIGQ9Ik0yNTYuNjM2LDE4OC41OTZjMC4yOTMsMy42MzcgMC4yMzMsNS45ODEgLTAuMTc2LDcuMDM3Yy0xLjcwMiw0LjgwOSAtNy40Miw3LjgyOCAtMTcuMTUyLDkuMDZjLTMuMjg1LDAuNDExIC02LjU2OCwtMS4xNDMgLTkuODUzLC00LjY2MmMwLDAuNTI4IDAuMTE3LDIuMTExIDAuMzUzLDQuNzUxYzAuMTc2LDEuOTM1IDAuMTQ2LDMuNTE4IC0wLjA4OCw0Ljc0OWMtMS40NjcsMC45MzggLTIuNjM5LDEuNDA4IC0zLjUxOSwxLjQwOGMtMS4zNSwwIC0yLjAyMywtMS4zMTkgLTIuMDIzLC0zLjk1OWMwLC0wLjQ2OSAwLjAyOSwtMS4yMTYgMC4wODgsLTIuMjQyYzAuMDU4LC0xLjAyNSAwLjA4OCwtMS43NDQgMC4wODgsLTIuMTU1YzAsLTAuOTk3IC0wLjA4OCwtMS43IC0wLjI2NCwtMi4xMTF2LTQuODM4YzAsLTAuMTE3IDAuMDI5LC0wLjI0OSAwLjA4OCwtMC4zOTZjMC4wNTgsLTAuMTQ2IDAuMTE3LC0wLjI3OCAwLjE3NiwtMC4zOTZjLTAuMDU5LC0wLjgyIC0wLjAzLC0yLjA4MSAwLjA4OCwtMy43ODJjMC4xMTcsLTEuMDU2IDAuMTE3LC0xLjcyOSAwLC0yLjAyM2MtMC4yOTQsLTAuNTg1IC0wLjQzOSwtMC45MzcgLTAuNDM5LC0xLjA1NWMwLjIzMywtMS42NDIgMS40MzcsLTIuNDYzIDMuNjA2LC0yLjQ2M2MxLjQwNywwIDIuMjU3LDAuNDk5IDIuNTUxLDEuNDk1YzAsMC45MzggMC4xMTcsMi4zMTcgMC4zNTIsNC4xMzRjMC4zNTMsMi4xMTEgMS40NjYsNC4yMjMgMy4zNDMsNi4zMzNjMi4wNTIsMi40MDUgNC4wMTYsMy41MTkgNS44OTQsMy4zNDNjMi4xMTEsLTAuMjMzIDQuMjIyLC0wLjczMiA2LjMzMywtMS40OTVjMi45MzIsLTEuMDU2IDQuNjkxLC0yLjI4NyA1LjI3OCwtMy42OTRjMC40MDksLTEuMDU2IDAuNjE1LC0yLjE2OSAwLjYxNSwtMy4zNDNjMCwtMy41NzYgLTEuMzE5LC02LjI0NSAtMy45NTgsLTguMDA0Yy0xLjE3NCwtMC43NjIgLTMuMzQzLC0xLjM3OCAtNi41MSwtMS44NDhjLTEuODE4LC0wLjIzMyAtMi45MzMsLTAuMzUyIC0zLjM0MiwtMC4zNTJjLTIuODE1LDAuMDU5IC01LjQ0LC0wLjg1IC03Ljg3MywtMi43MjdjLTIuNDM0LC0xLjg3NiAtMy42NSwtNC4wNDcgLTMuNjUsLTYuNTF2LTUuMTAxYzAsLTEuMTEzIDAuNjQ1LC0zLjcyMyAxLjkzNiwtNy44MjhjMC41ODUsLTEuOTM2IDAuOTA4LC0yLjk2MSAwLjk2OCwtMy4wNzljMC41MjcsLTEuMjMxIDEuMjAxLC0yLjA1MiAyLjAyMiwtMi40NjNjMS45OTMsLTAuOTk2IDQuMTA0LC0xLjQ5NSA2LjMzMywtMS40OTVjNC4zMzksMCA3LjUzNSwxLjc1OSA5LjU4OCw1LjI3N2MwLjE3NiwwLjE3NiAwLjQ2OSwwLjQ0IDAuODgsMC43OTJjMC4wNTgsLTAuODIgMC4xNzYsLTIuMDgxIDAuMzUyLC0zLjc4MmMtMC4wNTksLTAuNzYyIC0wLjExOCwtMS40OTUgLTAuMTc2LC0yLjE5OWMwLC0wLjgyIDAuNDA5LC0xLjM3NyAxLjIzMSwtMS42NzFjMC4yMzQsLTAuMTE3IDAuNTU3LC0wLjIwNSAwLjk2OCwtMC4yNjRjMC41ODYsLTAuMTE3IDEuMjE3LDAuMDMgMS44OTIsMC40MzljMC42NzMsMC40MTEgMC45NTIsMS42NDMgMC44MzUsMy42OTRjLTAuMDU5LDEuMjkgLTAuMTc2LDMuMTA4IC0wLjM1Miw1LjQ1M2MtMC4xNzYsMS45MzYgLTAuNDM5LDQuODk3IC0wLjc5Miw4Ljg4NWMwLjExNywwLjkzOCAwLjExNywyLjIyOSAwLDMuODdjLTAuMjk0LDEuMTE0IC0xLjE3NCwxLjY3MSAtMi42MzksMS42NzFjLTAuNzYzLDAgLTEuNDk1LC0wLjIwNSAtMi4xOTksLTAuNjE1Yy0wLjM1MiwtMS4xMTMgLTAuNTI3LC0xLjU4NCAtMC41MjcsLTEuNDA4YzAuMTE2LC0xLjU4MyAtMC4yMDYsLTMuNjk0IC0wLjk2OCwtNi4zMzNjLTAuNjQ2LC0xLjM0OCAtMS41MzksLTMuMjY4IC0yLjY4MywtNS43NjFjLTEuMTQ0LC0yLjQ5MiAtMi42NTQsLTMuODI3IC00LjUzLC00LjAwM2MtMi4zNDYsLTAuMTc2IC0zLjg3LDAuNjE2IC00LjU3NCwyLjM3NWMtMC4yMzQsMC43NjMgLTAuNTU4LDEuODc4IC0wLjk2NywzLjM0M2MtMC43MDQsMi4xNyAtMS4xNDQsNC4yNTIgLTEuMzIsNi4yNDVjLTAuMDU5LDAuNjQ2IC0wLjExOCwwLjkxIC0wLjE3NiwwLjc5MmMwLjE3NiwxLjE3NCAwLjM4MSwyLjM0NiAwLjYxNiwzLjUxOWMwLjI5MywxLjQ2NiAxLjAxMiwyLjU4MSAyLjE1NSwzLjM0MmMxLjE0NCwwLjc2MyAzLjMyNywxLjIzMSA2LjU1MywxLjQwN2M3LjkxNiwwLjQ3MSAxMi44MTIsMy4yMjcgMTQuNjg5LDguMjY5YzAuMjkyLDAuNDcgMC41ODUsMS4yNjEgMC44NzksMi4zNzR6IgogICAgICAgIGZpbGw9IiM4NTVjZDYiIC8+CiAgICA8L2c+CiAgPC9nPjwvc3ZnCj48IS0tcm90YXRpb25DZW50ZXI6Mjc6NDAuMDAwMDk5Njk3NzA1NTQtLT4K" />
        </th>
        <th>
          <a href="/Scratch/">Scratch </a>
        </th>
      </tr>
      <tr>
        <th>
          <img
            alt=""
            class="hamburger_menus-contents-icons"
            src="data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiPgogIDxwYXRoCiAgICBmaWxsPSIjODg4ODg4IgogICAgZD0iTTEyIDBjLTYuNjI2IDAtMTIgNS4zNzMtMTIgMTIgMCA1LjMwMiAzLjQzOCA5LjggOC4yMDcgMTEuMzg3LjU5OS4xMTEuNzkzLS4yNjEuNzkzLS41Nzd2LTIuMjM0Yy0zLjMzOC43MjYtNC4wMzMtMS40MTYtNC4wMzMtMS40MTYtLjU0Ni0xLjM4Ny0xLjMzMy0xLjc1Ni0xLjMzMy0xLjc1Ni0xLjA4OS0uNzQ1LjA4My0uNzI5LjA4My0uNzI5IDEuMjA1LjA4NCAxLjgzOSAxLjIzNyAxLjgzOSAxLjIzNyAxLjA3IDEuODM0IDIuODA3IDEuMzA0IDMuNDkyLjk5Ny4xMDctLjc3NS40MTgtMS4zMDUuNzYyLTEuNjA0LTIuNjY1LS4zMDUtNS40NjctMS4zMzQtNS40NjctNS45MzEgMC0xLjMxMS40NjktMi4zODEgMS4yMzYtMy4yMjEtLjEyNC0uMzAzLS41MzUtMS41MjQuMTE3LTMuMTc2IDAgMCAxLjAwOC0uMzIyIDMuMzAxIDEuMjMuOTU3LS4yNjYgMS45ODMtLjM5OSAzLjAwMy0uNDA0IDEuMDIuMDA1IDIuMDQ3LjEzOCAzLjAwNi40MDQgMi4yOTEtMS41NTIgMy4yOTctMS4yMyAzLjI5Ny0xLjIzLjY1MyAxLjY1My4yNDIgMi44NzQuMTE4IDMuMTc2Ljc3Ljg0IDEuMjM1IDEuOTExIDEuMjM1IDMuMjIxIDAgNC42MDktMi44MDcgNS42MjQtNS40NzkgNS45MjEuNDMuMzcyLjgyMyAxLjEwMi44MjMgMi4yMjJ2My4yOTNjMCAuMzE5LjE5Mi42OTQuODAxLjU3NiA0Ljc2NS0xLjU4OSA4LjE5OS02LjA4NiA4LjE5OS0xMS4zODYgMC02LjYyNy01LjM3My0xMi0xMi0xMnoiIC8+Cjwvc3ZnPgo=" />
        </th>
        <th>
          <a target="_blank" href="https://github.com/The-Infinitys">GitHub </a>
        </th>
      </tr>
      <tr>
        <th>
          <img
            alt=""
            class="hamburger_menus-contents-icons"
            src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjIyNjAiIHdpZHRoPSIyNTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAuMjU0IDAuMjUgNTAwIDQ1MS45NTQwMDAwMDAwMDAwNiI+PHBhdGggZD0iTTM5NC4wMzMuMjVoNzYuNjdMMzAzLjIwMiAxOTEuNjkzbDE5Ny4wNTIgMjYwLjUxMWgtMTU0LjI5TDIyNS4xMTggMjk0LjIwNSA4Ni44NDQgNDUyLjIwNEgxMC4xMjdsMTc5LjE2LTIwNC43N0wuMjU0LjI1SDE1OC40NmwxMDkuMjM0IDE0NC40MTd6bS0yNi45MDggNDA2LjA2M2g0Mi40ODNMMTM1LjM3NyA0My43M2gtNDUuNTl6IiBmaWxsPSIjODg4Ii8+PC9zdmc+Cg==" />
        </th>
        <th>
          <a target="_blank" href="https://x.com/The_Infinity_s/">X </a>
        </th>
      </tr>
      <tr>
        <th>
          <div id="color-theme-change">
            <svg
              name="sun"
              onclick="change_color_theme('light')"
              viewBox="0 0 100 100"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <circle cx="50" cy="50" r="20" style="fill: var(--text); stroke: none" />
              <path
                d="
                M50,25v-20
                M50,75v20
                M25,50h-20
                M75,50h20
                M67,67l14,14
                M33,67l-14,14
                M67,33l14,-14
                M33,33l-14,-14
                "
                style="stroke: var(--text); stroke-width: 4; fill: none;stroke-linecap:round;"
                />
            </svg>
            <svg
              name="moon"
              onclick="change_color_theme('dark')"
              viewBox="0 0 100 100"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <path
                d="
                M50,10
                A40,40,0,1,0,80,65
                A35,35,0,1,1,50,10
                z
                "
                style="stroke: none; fill: var(--text)"
                />
            </svg>
            <svg
              name="auto"
              onclick="change_color_theme('auto')"
              viewBox="0 0 100 100"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <path
                d="
                M50,30
                A20,20,0,1,0,67,57
                A15,15,0,1,1,50,30
                z
                "
                style="stroke: none; fill: var(--text)"
                />
              <path
                d="
                M50,25v-20
                M50,75v20
                M25,50h-20
                M75,50h20
                M67,67l14,14
                M33,67l-14,14
                M67,33l14,-14
                M33,33l-14,-14
                "
                style="stroke: var(--text); stroke-width: 4; fill: none;stroke-linecap:round;"
                />
            </svg>
          </div>
        </th>
      </tr>
    </table>
`;
  const header = document.createElement("header");
  header.style = `
  animation-name: show;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: initial;
  `;
  header.innerHTML = header_text;
  document.body.prepend(header);
};

const init_footer = function () {
  //headerの初期化
  const footer_text = `
    <div>
      <div>
        <p><a href="/contact/">Contact to The Infinity's</a></p>
        <p><a href="/article/">Watch The Infinity's Article</a></p>
        <p><a href="https://scratch.mit.edu/users/The_Infinitys/">Go to Scratch profile</a></p>
        <p><a href="https://github.com/The_Infinitys/">Go to GitHub profile</a></p>
      </div>
    </div>
    <h1>&copy; 2024 The Infinity's</h1>
  `;
  const footer = document.createElement("footer");
  footer.style = `
  animation-name: show;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: initial;
  `;
  footer.innerHTML = footer_text;
  document.body.append(footer);
};
const generate_Infinitys = function () {
  const The_Infinitys = (size, quality) => {
    const hsvToRgb16 = function (hue, saturation, value) {
      var result = false;
      if (
        (saturation || saturation === 0) &&
        saturation <= 100 &&
        (value || value === 0) &&
        value <= 100
      ) {
        var red = 0,
          green = 0,
          blue = 0,
          i = 0,
          f = 0,
          q = 0,
          p = 0,
          t = 0;
        hue = Number(hue % 360) / 60;
        saturation = Number(saturation) / 100;
        value = Number(value) / 100;
        if (saturation === 0) {
          red = value;
          green = value;
          blue = value;
        } else {
          i = Math.floor(hue);
          f = hue - i;
          p = value * (1 - saturation);
          q = value * (1 - saturation * f);
          t = value * (1 - saturation * (1 - f));
          switch (i) {
            case 0:
              red = value;
              green = t;
              blue = p;
              break;
            case 1:
              red = q;
              green = value;
              blue = p;
              break;
            case 2:
              red = p;
              green = value;
              blue = t;
              break;
            case 3:
              red = p;
              green = q;
              blue = value;
              break;
            case 4:
              red = t;
              green = p;
              blue = value;
              break;
            case 5:
              red = value;
              green = p;
              blue = q;
              break;
          }
        }
        result = {
          red: Math.round(red * 255).toString(),
          green: Math.round(green * 255).toString(),
          blue: Math.round(blue * 255).toString(),
        };
      }
      return "rgb(" + result.red + "," + result.green + "," + result.blue + ")";
    };
    const inf = (t) => {
      if (t < 0 || 720 < t) {
        return inf(t % 720);
      }
      const r = t * (Math.PI / 180);
      if (t < 360) {
        return {
          x: 100 * (Math.cos(r) - 1),
          y: Math.sin(r) * 80,
        };
      } else {
        return {
          x: -100 * (Math.cos(r) - 1),
          y: Math.sin(r) * 80,
        };
      }
    };
    const circle = (t) => {
      if (t < 0 || 360 < t) {
        return circle(t % 360);
      }
      const r = t * (Math.PI / 180);
      return {
        x: Math.cos(r),
        y: Math.sin(r),
      };
    };
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const graphics = canvas.getContext("2d");
    graphics.clearRect(0, 0, canvas.width, canvas.height);
    let before_data = inf(0);
    graphics.lineWidth = canvas.width / 57;
    for (let i = 0; i <= 720; i += quality) {
      const data = inf(i);
      graphics.beginPath();
      graphics.moveTo(
        (before_data.x * canvas.width) / 500 + canvas.width / 2,
        (before_data.y * canvas.height) / 500 + canvas.height / 2
      );
      graphics.lineTo(
        (data.x * canvas.width) / 500 + canvas.width / 2,
        (data.y * canvas.height) / 500 + canvas.height / 2
      );
      graphics.closePath();
      graphics.strokeStyle = hsvToRgb16(((data.x + 200) / 400) * 360, 100, 100);
      graphics.stroke();
      before_data = data;
    }
    before_data = circle(0);
    graphics.lineWidth = canvas.width / 777;
    for (let count = 0; count < 777; count += quality * 10) {
      for (let t = 0; t <= 360; t += quality) {
        let data = circle(t);
        data.x *= 1 - count / 7777;
        data.y *= 1 - count / 7777;
        graphics.beginPath();
        graphics.moveTo(
          (before_data.x * canvas.width) / 2.22 + canvas.width / 2,
          (before_data.y * canvas.height) / 2.22 + canvas.height / 2
        );
        graphics.lineTo(
          (data.x * canvas.width) / 2.22 + canvas.width / 2,
          (data.y * canvas.height) / 2.22 + canvas.height / 2
        );
        graphics.closePath();
        graphics.strokeStyle = hsvToRgb16(
          (t + 360 + count / 7.7) % 360,
          100,
          100
        );
        graphics.stroke();
        before_data = data;
      }
    }
    return canvas.toDataURL("image/webp", 1);
  };
  const elems = document.getElementsByClassName("The-Infinitys");
  for (let i = 0; i < elems.length; ++i) {
    elems[i].src = The_Infinitys(400, 2);
  }
};
//ハンバーガーメニューの設定
let is_opened_hamburgerMenu = false;
function hamburger_menu() {
  is_opened_hamburgerMenu = !is_opened_hamburgerMenu;
  const menu = document.querySelector("#hamburger_menus");
  const open_button = document.querySelector("#open_hamburger_menu");
  const close_button = document.querySelector("#close_hamburger_menu");
  if (is_opened_hamburgerMenu) {
    //open the menu
    open_button.classList.remove("hamburger_menu_icon_show");
    open_button.classList.add("hamburger_menu_icon_hide");
    close_button.classList.remove("hamburger_menu_icon_hide");
    close_button.classList.add("hamburger_menu_icon_show");
    menu.classList.add("hamburger-open");
    menu.classList.remove("hamburger-close");
    open_button.style.opacity = "0";
    close_button.style.opacity = "1";
    menu.style.left = "calc(100vw - var(--hamburger-width))";
    menu.style.opacity = "1";
  } else {
    //close the menu
    open_button.classList.add("hamburger_menu_icon_show");
    open_button.classList.remove("hamburger_menu_icon_hide");
    close_button.classList.add("hamburger_menu_icon_hide");
    close_button.classList.remove("hamburger_menu_icon_show");
    menu.classList.add("hamburger-close");
    menu.classList.remove("hamburger-open");
    open_button.style.opacity = "1";
    close_button.style.opacity = "0";
    menu.style.left = "100vw";
    menu.style.opacity = "0";
  }
}

// init color theme
let color_theme = "auto";
const renew_color_theme = () => {
  const change_button = document.querySelector("#color-theme-change");
  switch (color_theme) {
    case "light":
      document.documentElement.setAttribute("theme", "light");
      change_button.style.backgroundColor = "white";
      break;
    case "dark":
      document.documentElement.setAttribute("theme", "dark");
      change_button.style.backgroundColor = "black";
      break;
    case "auto":
      change_button.style.backgroundColor = "gray";
      if (window.matchMedia("(prefers-color-scheme: dark)").matches == true) {
        document.documentElement.setAttribute("theme", "dark");
      } else {
        document.documentElement.setAttribute("theme", "light");
      }
      break;
    default:
      alert("error happend on change color theme");
      break;
  }
};
const change_color_theme = (mode = null) => {
  color_theme = mode;
  renew_color_theme();
};
const auto_color_theme = () => {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  mediaQuery.addEventListener("change", renew_color_theme);
};
const generate_pattern = (mode = "honeycomb") => {
  //ダークモード・ライトモード対応
  const Rainbowpattern = document.createElement("canvas");
  Rainbowpattern.id = "Rainbowpattern";
  Rainbowpattern.style = `
    position:fixed;
    width:100vw;
    height:100vh;
    top:0;
    left:0;
    z-index:-100;
    animation-name: show;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: initial;
  `;
  document.body.append(Rainbowpattern);
  const draw = Rainbowpattern.getContext("2d");
  const rainbow_svg = document.createElement("div");
  rainbow_svg.id = "rainbow-back";
  document.body.append(rainbow_svg);
  console.log("draw-mode: " + mode);
  const pattern = (x, y, r, color, mode) => {
    if (mode.startsWith("honeycomb")) {
      draw.globalCompositeOperation = "source-over";
      draw.fillStyle = color;
      draw.beginPath();
      draw.moveTo(x, y - r);
      draw.lineTo(x + (3 ** 0.5 / 2) * r, y - r / 2);
      draw.lineTo(x + (3 ** 0.5 / 2) * r, y + r / 2);
      draw.lineTo(x, y + r);
      draw.lineTo(x - (3 ** 0.5 / 2) * r, y + r / 2);
      draw.lineTo(x - (3 ** 0.5 / 2) * r, y - r / 2);
      draw.fill();
    } else if (mode.startsWith("jp-spirit")) {
      draw.strokeStyle = color;
      draw.lineWidth = 1;
      draw.globalCompositeOperation = "destination-out";
      draw.beginPath();
      draw.arc(x, y, r, 0, 2 * Math.PI, true);
      draw.closePath();
      draw.stroke();
      draw.globalCompositeOperation = "source-over";
    } else if (mode.startsWith("triangle")) {
      draw.strokeStyle = color;
      draw.lineWidth = 1;
      draw.globalCompositeOperation = "destination-out";
      draw.beginPath();
      draw.lineTo(x + (3 ** 0.5 / 2) * r, y - r / 2);
      draw.lineTo(x, y + r);
      draw.lineTo(x - (3 ** 0.5 / 2) * r, y - r / 2);
      draw.closePath();
      draw.stroke();
      draw.globalCompositeOperation = "source-over";
    } else if (mode.startsWith("isosceles-trapezoid")) {
      draw.strokeStyle = color;
      draw.lineWidth = 1;
      draw.globalCompositeOperation = "destination-out";
      draw.beginPath();
      const trapizoid_width = r * 1.18;
      const trapizoid_height = r * 1.55;
      if (mode.endsWith(".0")) {
        draw.moveTo(x + trapizoid_width / 2, y + trapizoid_height / 2);
        draw.lineTo(x + trapizoid_width, y - trapizoid_height / 2);
        draw.lineTo(x - trapizoid_width, y - trapizoid_height / 2);
        draw.lineTo(x - trapizoid_width / 2, y + trapizoid_height / 2);
      } else {
        draw.moveTo(x + trapizoid_width, y + trapizoid_height / 2);
        draw.lineTo(x + trapizoid_width / 2, y - trapizoid_height / 2);
        draw.lineTo(x - trapizoid_width / 2, y - trapizoid_height / 2);
        draw.lineTo(x - trapizoid_width, y + trapizoid_height / 2);
      }
      draw.closePath();
      draw.stroke();
      draw.globalCompositeOperation = "source-over";
    } else {
      alert("The Infinity's Infinity style: invalid back code error");
    }
  };
  const radius = 50;
  const radius_percent = 1.12;
  // const hsvToRgb16 = function (hue, saturation, value) {
  //   var result = false;
  //   if (
  //     (saturation || saturation === 0) &&
  //     saturation <= 100 &&
  //     (value || value === 0) &&
  //     value <= 100
  //   ) {
  //     var red = 0,
  //       green = 0,
  //       blue = 0,
  //       i = 0,
  //       f = 0,
  //       q = 0,
  //       p = 0,
  //       t = 0;
  //     hue = Number(hue % 360) / 60;
  //     saturation = Number(saturation) / 100;
  //     value = Number(value) / 100;
  //     if (saturation === 0) {
  //       red = value;
  //       green = value;
  //       blue = value;
  //     } else {
  //       i = Math.floor(hue);
  //       f = hue - i;
  //       p = value * (1 - saturation);
  //       q = value * (1 - saturation * f);
  //       t = value * (1 - saturation * (1 - f));
  //       switch (i) {
  //         case 0:
  //           red = value;
  //           green = t;
  //           blue = p;
  //           break;
  //         case 1:
  //           red = q;
  //           green = value;
  //           blue = p;
  //           break;
  //         case 2:
  //           red = p;
  //           green = value;
  //           blue = t;
  //           break;
  //         case 3:
  //           red = p;
  //           green = q;
  //           blue = value;
  //           break;
  //         case 4:
  //           red = t;
  //           green = p;
  //           blue = value;
  //           break;
  //         case 5:
  //           red = value;
  //           green = p;
  //           blue = q;
  //           break;
  //       }
  //     }
  //     result = {
  //       red: Math.round(red * 255).toString(),
  //       green: Math.round(green * 255).toString(),
  //       blue: Math.round(blue * 255).toString(),
  //     };
  //   }
  //   return "rgb(" + result.red + "," + result.green + "," + result.blue + ")";
  // };
  const drawpattern = (color) => {
    draw.clearRect(0, 0, Rainbowpattern.width, Rainbowpattern.height);
    if (
      mode == "jp-spirit" ||
      mode == "triangle" ||
      mode == "isosceles-trapezoid"
    ) {
      draw.fillStyle = color;
      draw.fillRect(0, 0, Rainbowpattern.width, Rainbowpattern.height);
    }
    for (let i = 0; i < Math.round(Rainbowpattern.width / radius) + 2; ++i) {
      for (let j = 0; j < Math.round(Rainbowpattern.height / radius) + 2; ++j) {
        pattern(
          radius * 2 * i + (j % 2) * radius,
          ((radius * 2 * 3 ** 0.5) / 2) * j,
          radius * radius_percent,
          color,
          mode + "." + (i % 2).toString()
        );
      }
    }
  };

  const renewpatternCanvas = () => {
    Rainbowpattern.width = window.innerWidth * window.devicePixelRatio;
    Rainbowpattern.height = window.innerHeight * window.devicePixelRatio;
    if (document.documentElement.getAttribute("theme") == "dark") {
      drawpattern("#000");
    } else {
      drawpattern("#fff");
    }
  };
  renewpatternCanvas();
  window.onresize = renewpatternCanvas;
  setInterval(renewpatternCanvas, 100);
};
const generate_style = (mode = "monochrome") => {
  switch (mode) {
    case "monochrome":
      const dark_back = document.createElement("img");
      dark_back.src =
        "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzNjAiIGhlaWdodD0iMzYwIiB2aWV3Qm94PSIwLDAsMzYwLDM2MCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYwLDApIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNNjAsMzYwdi0zNjBoMzYwdjM2MHoiIGZpbGw9IiMwMDAwMDAiLz48cGF0aCBkPSJNNjAsMTgwdi0xODBoMTgweiIgZmlsbD0iIzI3MjcyNyIvPjxwYXRoIGQ9Ik02MCw5MHYtOTBoMTgweiIgZmlsbD0iIzg4ODg4OCIvPjxwYXRoIGQ9Ik00MjAsMTgwdjE4MGgtMTgweiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiMyNzI3MjciLz48cGF0aCBkPSJNNDIwLDI3MHY5MGgtMTgweiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiM4ODg4ODgiLz48cGF0aCBkPSJNMjQwLDBsMTgwLDB2MTgweiIgZmlsbD0iIzI3MjcyNyIvPjxwYXRoIGQ9Ik0zMzAsMGw5MCwwdjE4MHoiIGZpbGw9IiM4ODg4ODgiLz48cGF0aCBkPSJNMjQwLDM2MGwtMTgwLDBsMCwtMTgweiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiMyNzI3MjciLz48cGF0aCBkPSJNMTUwLDM2MGgtOTBsMCwtMTgweiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiM4ODg4ODgiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjoxODA6MTgwLS0+";
      dark_back.id = "dark-mobile";
      dark_back.alt = "";
      dark_back.style = `
        position:fixed;
        width:100vw;
        height:100vh;
        top:0;
        left:0;
        z-index:-1000;
      `;
      document.body.append(dark_back);
      const light_back = document.createElement("img");
      light_back.src =
        "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCwwLDM2MCwzNjAiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MCwwKSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTYwLDM2MHYtMzYwaDM2MHYzNjB6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0iI2ZmZmZmZiIvPjxwYXRoIGQ9Ik0yNDAsMGgxODB2MTgweiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJNMjQwLDBoMTgwdjkweiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiM4ODg4ODgiLz48cGF0aCBkPSJNMjQwLDM2MGgtMTgwdi0xODB6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0iI2MzYzNjMyIvPjxwYXRoIGQ9Ik0yNDAsMzYwaC0xODB2LTkweiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiM4ODg4ODgiLz48cGF0aCBkPSJNNjAsMTgwdi0xODBoMTgweiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJNNjAsMTgwdi0xODBoOTB6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0iIzg4ODg4OCIvPjxwYXRoIGQ9Ik00MjAsMTgwdjE4MGgtMTgweiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJNNDIwLDE4MHYxODBoLTkweiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiM4ODg4ODgiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjoxODA6MTgwLS0+";
      light_back.id = "light-mobile";
      light_back.alt = "";
      light_back.style = `
        position:fixed;
        width:100vw;
        height:100vh;
        top:0;
        left:0;
        z-index:-999;
      `;
      document.body.append(light_back);
      const center_inf = document.createElement("img");
      center_inf.src =
        "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxNzQiIGhlaWdodD0iMTc0IiB2aWV3Qm94PSIwLDAsMTc0LDE3NCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1MywtOTMpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjNzc3Nzc3IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTE1NSwxODBjMCwtMTguNzc3NjggMTkuMDI3OSwtMzQgNDIuNSwtMzRjMjMuNDcyMTEsMCA0Mi41LDE1LjIyMjMyIDQyLjUsMzRjMCwxOC43Nzc2OCAtMTkuMDI3ODksMzQgLTQyLjUsMzRjLTIzLjQ3MjEsMCAtNDIuNSwtMTUuMjIyMzIgLTQyLjUsLTM0eiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTI0MCwxODBjMCwtMTguNzc3NjggMTkuMDI3OSwtMzQgNDIuNSwtMzRjMjMuNDcyMTEsMCA0Mi41LDE1LjIyMjMyIDQyLjUsMzRjMCwxOC43Nzc2OCAtMTkuMDI3ODksMzQgLTQyLjUsMzRjLTIzLjQ3MjEsMCAtNDIuNSwtMTUuMjIyMzIgLTQyLjUsLTM0eiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTE1NSwxODBjMCwtNDYuOTQ0MiAzOC4wNTU4LC04NSA4NSwtODVjNDYuOTQ0MiwwIDg1LDM4LjA1NTggODUsODVjMCw0Ni45NDQyIC0zOC4wNTU4LDg1IC04NSw4NWMtNDYuOTQ0MiwwIC04NSwtMzguMDU1OCAtODUsLTg1eiIgc3Ryb2tlLXdpZHRoPSI0Ii8+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6ODc6ODctLT4=";
      center_inf.alt = "";
      center_inf.style = `
        position:fixed;
        width:50vw;
        height:50vw;
        transform: translate(-50%,-50%);
        top:50vh;
        left:50vw;
        z-index:-100;
        animation-name: show;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-iteration-count: initial;
      `;
      document.body.append(center_inf);
      break;
    case "wave":
      const drop = () => {
        const wave = document.createElement("div");
        wave.innerHTML = `
          <svg
            viewBox="0 0 100 100"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <style>
                .drop{
                  fill:var(--color);
                  stroke:none;
                  fill-opacity: 0;
                }
                .wave{
                  fill:none;
                  stroke:var(--color);
                  stroke-width: 0;
                }
              </style>
            </defs>
            <g>
              <circle cx="50" cy="50" r="40" class="drop">
                <animate
                  attributeType="XML"
                  attributeName="r"
                  calcMode="spline"
                  values="40; 0; 0"
                  keyTimes="0.0; 0.5; 1.0"
                  keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                  dur="2s"
                  repeatCount="1"
                />
                <animate
                  attributeType="XML"
                  attributeName="fill-opacity"
                  calcMode="spline"
                  values="0; 1; 0"
                  keyTimes="0.0; 0.5; 1.0"
                  keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                  dur="2s"
                  repeatCount="1"
                />
              </circle>
              <circle cx="50" cy="50" r="40" class="wave">
                <animate
                  attributeType="XML"
                  attributeName="r"
                  calcMode="spline"
                  values="0; 0; 40"
                  keyTimes="0.0; 0.5; 1.0"
                  keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                  dur="2s"
                  repeatCount="1"
                />
                <animate
                  attributeType="XML"
                  attributeName="stroke-width"
                  calcMode="spline"
                  values="0; 5; 0"
                  keyTimes="0.0; 0.5; 1.0"
                  keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                  dur="2s"
                  repeatCount="1"
                />
              </circle>
            </g>
          </svg>
        `;
        wave.style =
          `
          position:fixed;
          width:var(--size);
          height:var(--size);
          z-index:-1000;
          transform:translate(-50%,-50%);
          --color:` +
          "hsl(" +
          Math.random().toString() +
          `turn 100% 50%);
          --size:` +
          (40 * (1 - 0.9 * Math.random())).toString() +
          `vmin;
        `;
        wave.style.top = (100 * Math.random()).toString() + "vh";
        wave.style.left = (100 * Math.random()).toString() + "vw";
        document.body.append(wave);
        setTimeout(() => {
          wave.remove();
          drop();
        }, 2000);
      };
      for (let drop_count = 0; drop_count < 10; drop_count++) {
        drop();
      }
      break;
    default:
      break;
  }
};
const is_phone = () => {
  const ua = navigator.userAgent;
  if (ua.indexOf("iPhone") >= 0) {
    return true;
  }
  if (ua.indexOf("iPad") >= 0) {
    return true;
  }
  if (ua.indexOf("Android") >= 0) {
    return true;
  }
  return false;
};

const The_Infinitys_main = () => {
  init_header();
  init_footer();
  auto_color_theme();
  renew_color_theme();
  if (Math.random() < 1 / 6) {
    generate_style((mode = "wave"));
  } else if (Math.random() < 1 / 5) {
    generate_style((mode = "monochrome"));
  } else if (Math.random() < 1 / 4) {
    generate_pattern((mode = "honeycomb"));
  } else if (Math.random() < 1 / 3) {
    generate_pattern((mode = "jp-spirit"));
  } else if (Math.random() < 1 / 2) {
    generate_pattern((mode = "triangle"));
  } else {
    generate_pattern((mode = "isosceles-trapezoid"));
  }
};
The_Infinitys_main();
