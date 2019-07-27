# 汇编语言（王爽）检测点参考答案

## 2.1

(1)

mov ax,62627 AX=F4A3H | 62627

> 解析：将62627送入寄存器AX；所以AX为"62627"，为了直观也可以转为16进制"F4A3H"

mov ah,31H AX=31A3H

> 解析：将31H送入寄存器AH，此时的AH=31H，由上文所知AL=A3H；所以AX=31A3H

mov al,23H AX=3123H

> 解析：将23H送入寄存器AL，此时的AL=23H，由上文所知AH=31H；所以AX=3123H

add ax,ax AX=6246H

> 解析：将寄存器AX中的数值加上AX，由上文所知AX=3123H；经计算得AX=6246H

mov bx,826CH BX=826CH

> 解析：将826CH送入寄存器BX；所以BX为826CH

mov cx,ax CX=6246H

> 解析：将寄存器AX中的数据送入寄存器CX，由上文所知AX=6246H；所以CX为6246H

mov ax,bx AX=826CH

> 解析：将寄存器BX中的数据送入寄存器AX，由上文所知BX=826CH；所以AX为826CH

add ax,bx AX=04D8H

> 解析：将寄存器BX中的数据与寄存器AX中的数据相加，结果存在AX中；由上文所知AX=826CH，BX=826CH；相加后的值为104D8H，但是AX为16位寄存器，只能存放4位十六进制的数据，所以最高位的1不能存在AX中；所以AX为04D8H

mov al,bh AX=0482H

> 解析：将寄存器BH的数值送入寄存器AL；由上文可知BH为82H，AH为04H；所以AX为0482H

mov ah,bl AX=6C82H

> 解析：将寄存器BL的数值送入寄存器AH；由上文可知BL为6CH，AL为82H；所以AX为6C82H

add ah,ah AX=D882H

> 解析：将寄存器AH中的数据与寄存器AH中的数据相加，相加后AH为D8H，由上文可知AL为82H；所以AX为D882H

add al,6 AX=D888H

> 解析：将寄存器AL中的数据加上6，由上文可知AH为D8H、AL为82H，AL相加后的值为88H；所以AX为D888H

add al,al AX=D810H

> 解析：将寄存器AL中的数据与寄存器AL中的数据相加；由上文所知AL=88H，AH=D8H；相加后的值为110H，但是AL为8位寄存器，只能存放2位十六进制的数据，所以最高位的1不能存在AL中；AL为10H，所以AX为D810H

mov ax,cx AX=6246H

> 解析：将寄存器CX的数值送入寄存器AX；由上文可知CX为6246H；所以AX为6246H

(2)

mov ax,2   ->  AX=2
add ax,ax  ->  AX=4
add ax,ax  ->  AX=8
add ax,ax  ->  AX=16
