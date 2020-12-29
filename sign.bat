@echo off
setlocal
:: todo: bump version and add to archive name
call ignore\mozilla-addons.bat
for %%I in (.) do set CurrDirName=%%~nxI
call web-ext sign  --api-key "%MOZILLA_JWT_ISSUER%" --api-secret "%MOZILLA_JWT_SECRET%" --filename "%CurrDirName%.zip"