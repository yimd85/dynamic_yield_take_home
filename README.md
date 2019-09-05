High level objective: build a chrome extension that will track a user’s affinity* as they browse a website (Urban Outfitters US for this challenge) and save the values to local storage.

 

* User Affinity: this is basically a score that a user has for different keywords on site. So if a user views 2 womens jackets, they’ll have a score for womens and score for jackets. If that user adds something to cart or purchases, they’ll have higher scores for the keywords associated with that product

 

Details:

For the sake of this challenge, affinity will only include the 5 values included on this page: https://www.urbanoutfitters.com/new-arrivals
Womens
Mens
Home
Lifestyle
Beauty

Part One:
As a user browses the site, they should build a score for each of these values
Different interactions should hold different weights
Product page view: increment score by 1
Product added to cart: increment score by 3
Example flow:
User visits 7 product pages under the category beauty
User adds one beauty product to cart
Their score for beauty is now 10
Determining the type of page:
You can see if a product fits into one of the 5 affinity values by checking the globally scoped variable: utag_data.product_category
Since this score needs to be persistent across page views and sessions, you will to store and increment the value in local storage
Please use the name “CSE_Challenge” for this value

Part Two:
On the original URL (https://www.urbanoutfitters.com/new-arrivals) there are 5 rows of content - each associated with one of the affinity values
Reorder these 5 rows according to the user’s score, with their highest score being at the top
Please feel free to add more features in order to make it aesthetically appealing or work correctly. The code should be well written (vanilla JS), documented and designed. 