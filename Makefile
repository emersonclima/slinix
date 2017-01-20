INSTALL_PREFFIX= /usr/local

TO_BIN= slinix
TO_SHARED= slinix.css slinix.js

install:
	install -m 0755 $(TO_BIN) $(INSTALL_PREFFIX)/bin
	mkdir -p $(INSTALL_PREFFIX)/share/slinix
	install -m 0644 $(TO_SHARED) $(INSTALL_PREFFIX)/share/slinix
