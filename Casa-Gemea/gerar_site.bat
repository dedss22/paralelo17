@echo off
chcp 65001 > nul
echo ========================================================
echo   GERADOR DA LANDING PAGE - CASA GÊMEA (PARALELO 17)
echo ========================================================
echo.
echo Lendo configuracao de casa.config.js e gerando index.html...
node build.js
echo.
if %ERRORLEVEL% EQU 0 (
  echo [SUCESSO] index.html atualizado com sucesso!
) else (
  echo [ERRO] Falha ao executar o build.js. Verifique se o Node.js esta instalado.
)
echo.
pause
