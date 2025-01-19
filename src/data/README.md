# How to update the hours on this website.

Click on the file of the area that you would like to edit, and click the pencil in the top corner labeled `Edit this file`.

Then replace the fields labeled `Monday` - `Sunday` with the new hours you would like to update.

I have been using the format `{openingHour am/pm} - {closingHour am/pm}` with a space between the times, but not between the hour and the label for `am/pm`. You can also seasonally close the location by setting `seasonallyClosed` to true
```json
"seasonallyClosed" : true,
```

To attach a notice to the location, you can add text into the `notice` field, which will be displayed at the bottom of the hours card once you set `showNotice` to true.
```json
"notice" : "some text",
"showNotice" : true
```

You can also change the title on the card by updating the title field.