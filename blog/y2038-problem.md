---
---
# y2038 issue in linux kernel

The Year 2038 problem or commonly called as y2038 issue is an issue for computing and data storage situations in which time values are stored or calculated as a signed 32-bit integer, and this number is interpreted as the number of seconds since 00:00:00 UTC on 1 January 1970 (the epoch).[1] Such implementations cannot encode times after 03:14:07 UTC on 19 January 2038.

## y2038 and linux

Following are the issues that can will occur in linux due to y2038 issue:

* On Jan 19th 2038, 32 bit time metric will overflow and become negative.

* Negative time values will be considered as invalid, thus timers set beyond Jan 19 2038 will fail.

* Internal kernel timers beyond this date will never fire.

* This will lead linux kernel to hang.

## Most harmful impact of y2038

We can consider that today most of the systems are 64 bit, so how it will affect the current scenario? But there are embedded systems which still run on 32 bit structure.

Moreover many data structures in use today have 32-bit time representations embedded into their structure. A full list of these data structures is virtually impossible to derive but there are well-known data structures that have the Unix time problem:

* file systems (many file systems use only 32 bits to represent times in inodes binary file formats (that use 32-bit time fields).

* databases (that have 32-bit time fields)

* database query languages, like SQL that have UNIX_TIMESTAMP() like commands.

Examples of systems utilizing data structures that may contain 32-bit time representations include:

* COBOL systems of 1970s–1990s vintage that have not been replaced by 2038-compliant systems[citation needed]

* Embedded factory, refinery control and monitoring subsystems assorted medical devices assorted military devices

* Any system making use of data structures containing 32-bit time representations will present risk. The degree of risk is dependent on the mode of failure.

## Solution

We use following methods to tackle y2038 issue:

* we can support both 32 bit and 64 bit compatible time_t values. We will let lib_c to decide which values needs to be chosen.

* 32-bit systems using data structures like 'struct timeval', 'struct time_t' will break in the year 2038, so we have to replace that code with more appropriate types.

## Contribution

List of contribution towards this projects can be found [here](https://git.kernel.org/pub/scm/linux/kernel/git/gregkh/staging.git/log/?h=staging-next&qt=author&q=somyaanand214%40gmail.com&showmsg=1)