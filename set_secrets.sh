vcr secret remove --name VONAAG_APP_ID
vcr secret create --name VONAGE_APP_ID --value 183dcd42-8703-4782-9ec3-c03ed36f222c

vcr secret remove --name VONAGE_PRIVATE_KEY
vcr secret create --name VONAGE_PRIVATE_KEY --filename /Users/mvernick/Keys/vcr-starter.key

vcr secret remove --name VIDEO_SERVICE_PROVIDER
vcr secret create --name VIDEO_SERVICE_PROVIDER --value vonage

