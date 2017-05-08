REM KioskUser.bat
REM Kill explorer
taskkill /IM chrome.exe > nul
taskkill /f /im explorer.exe

REM Start Chrome
C:\PROGRA~2\Google\Chrome\Application\chrome --kiosk "file:///C:/Users/unit 29/WebstormProjects/Unit 29/Unit29Title.html" --disable-pinch

