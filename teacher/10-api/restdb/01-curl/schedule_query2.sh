curl -i -H "Accept: application/json"\
    -H "Content-Type: application/json"\
    -H "x-apikey: b25aee0960cfd52de8ee42ebe36da14cc29aa"\
    -g -X GET 'https://ccckmit-a577.restdb.io/rest/schedule?q={"datetime":{"$gte":"2024-05-27T18:00:00.000Z"}}'

#    -X GET 'https://ccckmit-a577.restdb.io/rest/schedule?q={"datetime":{"$gt":"2024-05-27T00:00:00.000Z"}}'
