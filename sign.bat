@echo off
setlocal

call ignore\mozilla-addons.bat
for %%I in (.) do set CurrDirName=%%~nxI
echo web-ext sign  --api-key "%MOZILLA_JWT_ISSUER%" --api-secret "%MOZILLA_JWT_SECRET%" --filename "%CurrDirName%.zip"