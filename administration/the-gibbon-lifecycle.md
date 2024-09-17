---
title: The Gibbon Lifecycle
order: 5
draft: false
---
# The Gibbon Lifecycle

Once your installation is up and running, there are several actions that often happen with regular frequency. Especially since Gibbon is designed to help manage school data, the lifecycle of Gibbon will often follow a school's academic calendar.

The following are recommended actions and tools that can help keep Gibbon in good working order:
- Establish a clear [Backup Plan](<backing-up-your-system.md>) for both your file system and your database.
- Setup [Command Line Tools](<command-line-tools.md>) to update data and schedule notifications automatically.
- Plan for regular [Server Maintenance](<server-maintenance.md>) to update your operating system and server software.

## One School Year to the Next

The largest unit of time in Gibbon is a **School Year**. Many different types of records are attached to a school year, and are archived when [rolling over to a new school year](<../modules/admin/rollover.md>). 

::: tip
A rollover is an essential process that starts a new school year, enrols students, and updates users based on their status. The rollover performs a lot of work that would otherwise need to be done manually.
:::

School years have a start date and an end date, and are managed in <u>School Admin > Manage School Years</u>.
- School years are divided into terms
- Terms are divided into days
- Days are viewed week by week

Users with permission can switch to different school years using the Year Switcher on the dashboard, or by choosing a school year during login. This enables them to access records that are attached to specific school years.
## One Version to the Next

We recommend keeping Gibbon up-to-date with the latest version. Generally, a new version of Gibbon is released twice per year, and exact release dates can be found in the [Gibbon Road Map](<../development/gibbon-road-map.md>). 

Since new versions of the core often add new features, many schools will choose to update Gibbon between school years or between terms. In this case, we recommend <u>a minimum of one update per year</u>, to ensure you have the latest features and security updates.

::: warning NOTE
If a new version is marked as a Security Release, we highly recommend updating as soon as possible. These releases avoid adding new features, but often include fixes that aim to keep your system secure.
:::