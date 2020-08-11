## Description

This repo aims to put forward a segmentation fault issue encountered on Alpine Linux with node-libxl.
Issue seems to be coming from 

# Usage

Prerequisites:
	- Docker
	- A valid LibXL License

To build and run the example:

```
LIBXL_OWNER="<LICENSE_OWNER>" LIBXL_KEY="<LICENSE_KEY>" ./build_run.sh
```

Expected output: same for Alpine & Non-Alpine versions

Actual output:

```
+ docker run -it --rm -e LIBXL_OWNER=<LICENSE_OWNER> -e LIBXL_KEY=<LICENSE_KEY> libxl-segfault:standard
String cell:  ID
Empty  cell
String cell:  Emails
String cell:  test@docker-alpine.com
String cell:  User Name
String cell:  John Doe
String cell:  Full day event
String cell:  no
String cell:  Event type
String cell:  Afterwork
String cell:  Number
Number cell:
42
String cell:  Description
String cell:  Test description
String cell:  Event start date & time
Number cell:
44135.5
String cell:  Event end date & time
Number cell:
44135.583333333336
Empty  cell
Blank cell
0
+ docker run -it --rm -e LIBXL_OWNER=<LICENSE_OWNER> -e LIBXL_KEY=<LICENSE_KEY>libxl-segfault:alpine
String cell:  ID
Empty  cell
String cell:  Emails
String cell:  test@docker-alpine.com
String cell:  User Name
String cell:  John Doe
String cell:  Full day event
String cell:  no
String cell:  Event type
String cell:  Afterwork
String cell:  Number
Number cell:
Segmentation fault (core dumped)
```
