@echo off
REM Start emulator
start "" emulator -avd Pixel6-Root -writable-system -no-snapshot -port 5560

echo Waiting for emulator to connect to ADB...
adb wait-for-device

echo Waiting for Android to finish booting...
:wait_boot
for /f "delims=" %%a in ('adb shell getprop sys.boot_completed 2^>nul') do (
    if "%%a"=="1" goto booted
)
timeout /t 2 >nul
goto wait_boot

:booted
echo Boot completed. Waiting extra for system to be ready...
timeout /t 5 >nul

echo Restarting ADB as root...
adb root
timeout /t 2 >nul
adb remount
timeout /t 2 >nul

echo Starting frida-server...
adb shell "./data/local/tmp/frida-server &"

echo Done.
pause
