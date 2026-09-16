@echo off
title Enviar Projetos para o GitHub - Paralelo 17
color 0A
echo ========================================================
echo   ENVIANDO PROJETOS PARALELO 17 PARA O GITHUB
echo   Repositorio: https://github.com/dedss22/paralelo17
echo ========================================================
echo.
echo Se uma janela do navegador abrir, confirme o login no GitHub.
echo.
git push -u origin main
echo.
if %ERRORLEVEL% EQU 0 (
    echo ========================================================
    echo   UPLOAD CONCLUIDO COM SUCESSO!
    echo ========================================================
) else (
    echo.
    echo ========================================================
    echo   Houve uma solicitacao de autenticacao.
    echo   Se necessario, faca login pelo navegador que abriu
    echo   ou gere um Token (PAT) no GitHub.
    echo ========================================================
)
echo.
pause
