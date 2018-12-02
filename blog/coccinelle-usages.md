---
date: 2016-08-11
---
# Coccinelle

Coccinelle is a program matching tool which allows programmers to easily write some complex style-preserving source-to-source transformations on C source code, for instance, code refactoring.
There are useful online resources which document this tool very well, however it is slightly difficult for a beginner to understand these concepts through these materials. So this is my attempt to explain the details of this tool in more convenient way.

## About Coccinelle

Coccinelle is a program matching and transformation engine for C code. It works by providing a language SmPL (semantic patch language) for specifying desired matches and transformations in C code. initially, Coccinelle was initially targeted towards performing collateral evolutions in Linux, but it can be applied on any other C code.

### Goals of Coccinelle

* Automatically find code containing bugs or requiring collateral evolution.

* Automatically fix bugs and perform collateral evolution.

* Provide a system that is accessible to software developers.

### Getting started with coccinelle

It is always helpful to learn via examples. So I will try to cover a set of examples which will help to understand every element of coccinelle tools in a very applied way. So to get started with coccinelle, let us work out with the following steps:

* Step 1: Download coccinelle and install it. The Coccinelle binary is called spatch. For linux, you can do it via following command:

sudo apt-get install coccinelle

* Step-2: As we have discussed coccinelle utilizes semantic patch language. Lets consider a problem where we want to add parantheses over statement like !E & C so that it would become !(E & C). To solve this type of issue, make a file say ex1.cocci which contains:

``` patch
@@
expression E;
constant C;
@@
- !E & C
+ !(E & C)
```

* Step -3 : Save the above code, then work out with following commands in your working directory.

$ spatch --sp-file ex1.cocci --no-includes --dir {your directory path}/drivers/staging > ret.out.

Did you find any satisfactory result? if yes, then submit some of the patches. Some of my accepted patches in linux foundation are [here](https://git.kernel.org/pub/scm/linux/kernel/git/gregkh/staging.git/log/?h=staging-next&qt=author&q=somyaanand214%40gmail.com&showmsg=1)
