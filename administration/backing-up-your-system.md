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

With Gibbon up and running, you will want to protect your installation in case of disaster, allowing yourself to recover. Our recommendation is to use a shell script ([example here](</img/admin/getting-started/script_backup1.sh>) for *nix servers) to copy all important files and database data to an external drive, which should be rotated to maintain online and offline copies of your data. On *nix servers, you can use cron to schedule the script to run on a regular basis (e.g. every night at 01:00):

```sh
0 1 * * * cd /home/user/ ; script_backup.sh
```
