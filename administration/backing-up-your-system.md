---
title: Backing Up Your System
categories:
  - support
tags: 
order: 30
contributors:
  - rossdotparker
---
# Backing Up Your System

With Gibbon up and running, you will want to protect your installation in case of disaster, allowing yourself to recover. 

There are two main considerations for backing up:
- **Database Backup**  
  Ensure that you have a backed up copies of your MySQL database. These should ideally be daily backups with a rotation to keep multiple copies.
- **File System Backup**  
  Backing up the files in your Gibbon installation, ideally the full installation, but at the very least the `/uploads` and `/archive` directories, ensures that any files uploaded by users are not lost. This is generally achieved through a daily VM snapshot. 

::: tip Backup Recommendation
Ideally, your backup process should be **automated and scheduled** to occur at regular frequencies, with periodic check-ups to ensure backups are working as expected. You should also aim to include an **offsite backup** where at least one copy of your installation is stored in a separate physical location.
:::

## Shell Script

Another recommendation is to use a shell script ([example here](/img/admin/getting-started/script_backup1.sh) for Linux servers) to copy all important files and database data to an external drive, which should be r<u>otated to maintain online and offline copies</u> of your data. On Linux servers, you can use cron to schedule the script to run on a regular basis (e.g. every night at 01:00):

```sh
0 1 * * * cd /home/user/ ; script_backup.sh
```

## AWS Cloud Backup

TODO. 

If you host your system on AWS, you can also use the lifecycle manager on AWS to setup rotating snapshots of your whole instance.
## MySQL Dump

A simple yet basic way to create database backups is to run the mysqldump utility:

``` sh
mysqldump -u [username] -p [database_name] > your_backup_file_name.sql
```

You can set this command to [run as a cron task](https://medium.com/@satriajanaka09/how-to-setup-a-scheduler-for-mysql-database-backup-with-crontab-63917e594bbb), to backup the database daily. The limitation of this method is that it generally overwrites the same file each day, and the backup still resides on the same volume as your server, so should there be drive failure, you'd lose the backup as well.
## AutoMySQLBackup

The [AutoMySQLBackup tool](https://github.com/sixhop/AutoMySQLBackup) is similar to the mysqldump utility, but it lets you setup a configuration file to create rotating backups, keeping a certain number of hourly, daily, weekly, and monthly backups. Similar to mysqldump, this still saves the database to the same volume, so you should setup a process to perioditcally copy or rotate these backups onto another drive or upload to another server.