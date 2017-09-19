## Introduction

Exchange Calendar is an add-on for [Thunderbird](https://mozilla.org/thunderbird)
and [Seamonkey](https://www.seamonkey-project.org/).

It extends the [Lightning](https://mozilla.org/calendar) add-on to provide
[Microsoft Exchange](http://microsoft.com/exchange) support.

Exchange Calendar extension can:
  * Synchronize calendars, tasks, and contacts with a Microsoft Exchange server.
  * Create, edit and update events and tasks.
  * Display contacts from your address books and the global address list
    (they are only readable, they are usable with address autocompletion)
  * Manage the Exchange « out of office » feature

This extension requires:
  * Lightning extension corresponding to the Thunderbird release
  * The Exchange server has to provide an Exchange Web Service

This extension was developed by its original author (Michel Verbraak) for
Exchange 2007, 2010 and 2013.

The ExchangeCalendar community is now maintaining this extension. Support is
best effort and cannot be guaranteed. Contributions are welcome.

## Contributing

This add-on is open source and based on the work of many
[contributors](https://github.com/ExchangeCalendar/exchangecalendar/graphs/contributors).

This project is a community driven effort to keep maintained and uptodate
the "Exchange EWS Provider" extension created by Michel Verbraak.

Currently, the community is really small and have too few developers to
give any warranty on the future. Please help us to continue this project.

### Provide feedback, report issue

You are welcome to provide feedback on our Github project:
https://github.com/ExchangeCalendar/exchangecalendar

Please note that the project is built only for latest stable Thunderbird release
and latest stable Lightning release.

If you use any different release, please write it in your report.

As this add-on extends Thunderbird and Lightning directly, it could be in
conflict with other add-ons.

If you can give us a list of installed and enabled add-ons, it will help us.

### Get project and build it

To build the add-on, you have to:
```bash
# clone this project
git clone https://github.com/ExchangeCalendar/exchangecalendar.git
cd exchangecalendar
# build it
make build
```
Then an `xpi` file is created in the project folder.
This file is directly installable from the add-on page of Thunderbird.

If it doesn't work, please check you have these tools installed (example for
Debian):
```bash
sudo apt install git-core zip
```

### Patch the code

To help us to maintain the code, we will be thankful to follow these main
guidelines:

* Use indentation with 4 spaces
* Avoid too long lines, try to break long lines into smaller ones
* Avoid to write "spaghetti" code with too many if/else imbrications
* Try to keep code simple to help us maintain it on long term

When your patches are ready, you are welcome to do pull requests on our
repository.

Please help us to review your code by making multiple small pull
requests instead of big ones modifying big parts of the code.

### Translate

You are welcome to provide translation updates on our Transifex project:
https://www.transifex.com/ExchangeCalendar/exchangecalendar

## License

This software is licensed under the
[GNU General Public License, Version 3](http://www.gnu.org/licenses/gpl.html).

Some of the icons and images used are from the Fugue Icons Collection made
by [Yusuke Kamiyamane](http://p.yusukekamiyamane.com/)
