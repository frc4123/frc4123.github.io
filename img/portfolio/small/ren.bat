@echo off
setlocal EnableDelayedExpansion
set i=0
for %%a in (*.jpg) do (
    set /a i+=1
    ren "%%a" "!i!.new"
)
ren *.new *.jpg