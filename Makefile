version = $(shell cat VERSION)
excludefromxpi = \*.git \*.xpi \*.sh update\*.txt Makefile VERSION

beautify:
	find \( -name "*.xml" -o -name "*.rdf" \) -exec xmllint --format --output {} {} \;
	find -name "*.js" -exec js-beautify --jslint-happy --indent-with-tabs --operator-position after-newline --replace {} \;

build:
	sed -i 's/\(\s\)*<em:version>[^<]*\?<\/em:version>/\1<em:version>$(version)<\/em:version>/' install.rdf
	cat defaults/preferences/update_disable.txt > defaults/preferences/update.js
	zip -r exchangecalendar-v"$(version)".xpi -x $(excludefromxpi) -- . 

dev: beautify build
