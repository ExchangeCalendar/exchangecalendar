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

Now, ExchangeCalendar community try to keep this extension working, but can't
provide any guarantee on which versions are supported.

## Contributing

This add-on is open source and based on the work of many
[contributors](https://github.com/ExchangeCalendar/exchangecalendar/graphs/contributors).

This project is a community driven effort to keep maintained and uptodate
the "Exchange EWS Provider" extension created by Michel Verbraak.

Currently, the community is really small and have too few developers to
give any warranty on the future. Please help us to continue this project.

### Provide feedback, report issue

You are welcome to provide feedback on our github project:
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

### Modify code

To help us to maintain the code, we will be thankful to follow these guidelines:

* For Javascript files, use tabulations to indent your code
* For XML files, use spaces

That's a bit strange, we know, but it's like the original code has been written.

As current code indentation is really bad and as we are humans, if you edit a
file, please first use formatters to automatically have better code indentation:

* For Javascript files, you can use js-beautify (from `jsbeautifier` Debian package):
`js-beautify --jslint-happy --indent-with-tabs --operator-position after-newline --replace codefile.js`
* For XML files, you can use xmlllint (from `libxml2-utils` Debian pacakge):
`xmllint --format --output codefile.xml codefile.xml`

### Translate

Currently, community is modifying manually translations.
We are looking to use standard translation tools to easier translate application.

#### Manually translate

To manually translate the add-on with a new localization `ab-CD`, you have to:

1. Get the project code (see section above)
2. Copy the current `en-US` localization:
`cp -a locale/exchangecalendar/en-US locale/exchangecalendar/ab-CD`
3. Edit every `.dtd` files with your translations
4. (first time only): modify, or ask to modify, the `chrome.manifest` file to
enable your localization by adding this line:
`locale exchangecalendar ab-CD locale/exchangecalendar/ab-CD/`
5. Edit the `install.rdf` file to add the main project description before the
last `</Description>` text:
```rdf
    <em:localized>
        <Description>
            <em:locale>ab-CD</em:locale>
            <em:name>Exchange Calendar</em:name>
            <em:description>
Your localized project description.
            </em:description>
        </Description>
    </em:localized>
```

For last two steps, don't worry, we will be happy to do it for you, just ask it.

#### Automatically translate

We are looking for a way to give translators easier tools to do their work.
It will certainly work with a web service and standardized GNU gettext tools.

## License

This software is licensed under the
[GNU General Public License, Version 3](http://www.gnu.org/licenses/gpl.html).

Some of the icons and images used are from the Fugue Icons Collection made
by [Yusuke Kamiyamane](http://p.yusukekamiyamane.com/)
