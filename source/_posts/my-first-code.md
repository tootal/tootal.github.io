---
title: 我的第一行代码
toc: false
date: 2020-05-01 10:05:15
tags:
---
[RQNOJ - 陶陶摘苹果](http://www.rqnoj.cn/status/1003351)
[2013年江西省计算机奥赛源程序公示（JX-609037）](http://jiangxi.xiaoxiaotong.org/FileNotice/Detail?lnArticleID=21752)
<!-- more -->
目前能找到的有记录的最早的代码，编写时间：2013年11月8日14：30左右。上面那个陶陶摘苹果的时间更早，可惜因为RQNOJ的原因找不到代码了。

```pas
program count;
var
	i,n,x,j,ans:longint;
	a:string;
	b:char;
begin
	assign(input,'count.in');reset(input);
	assign(output,'count.out');rewrite(output);
	readln(n,x);
	ans:=0;
	b:=chr(x+ord('0'));
	for i:= x to n do
	begin
		str(i,a);
		for j:=1 to length(a) do
			if a[j]=b then inc(ans);
	end;
	writeln(ans);
	close(input);
	close(output);
end.

```

至于我记忆中的第一行代码，应该是在2012年年末左右，使用Pascal语言编写的Hello World程序。使用的IDE是[Free Pascal](https://www.freepascal.org/)，现在仍然可以在官网下载到。

大概是这样：

```pas
program hello;
begin
    writeln('hello world!');
end.
```

可惜现在Windows10下Free Pascal的IDE没法打开了（打开会闪退，目测是有兼容性问题），命令行还可以使用。有点怀念当时蓝底白字的编程界面了。。以后有时间可以用虚拟机打开试试。

