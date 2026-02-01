@echo off
echo.
echo ================================================
echo   5RINGS Connect - Starting Development Server
echo ================================================
echo.
echo Installing dependencies...
call npm install
echo.
echo Starting development server...
echo.
echo Your app will open at: http://localhost:8080
echo.
echo Press Ctrl+C to stop the server
echo.
call npm run dev
