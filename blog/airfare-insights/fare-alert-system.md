---
date: 2017-05-12
tags:
    - project
---
# Fare alert system

Purchasing a flight ticket, though a simple and quick affair, causes lot of anxiety to many travellers even today due to the fact that airlines frequently change fares. Due to this dynamic nature of airfare fluctuation, fare alert system plays a key role in customer engagement and better user experience in travel industry.

## Fare volatility

Airline fare system is one of the most dynamic metric in travel industry. For instance, Airlines start actively increasing fares in the last 2 weeks, often doubling them 24hrs prior to departure time. Under competitive pressure from other airlines, they also announce flash sales with significantly reduced fares sometimes by even 50%. The catch however is, limited seat availability at such discounted fares. This dynamism in fares fluctuating up and down often during the same day, is bound to drive travellers anxious about fares. As a result, a potential customer often search multiple times inorder to find the best pricing for the route. Thus, designing a fare-alert system which can monitor the fare changes for the routes that the user is interested in and notify them when there is a significant change in the fare can contribute towards a hassle free airfare booking, hence a better customer experience.

## Fare alert utility

Customers typically search anxiously 15-30 times before making a successful booking. Based on the search the customers have made, we can identify the important routes for the customer. We then can watch out for those route for any price flucuation. Fare alert system can be used for notification in the following scenarios:

* If a user has searched for a particular origin, destination and date of journey multiple times, we can register user for that very route. We then notify them when there is a significant change in that route.

* If a user has made activity till payment booking or cart checkout and then dropped off, we can customize our fare alert to notify the user with current fare, thereby converting a potential customer.

## Architecture

We can divide the entire architecture into two segments.

* Log all search action performed by the user and then pass it into a event stream which will categorize them into different topics, then register them for significant routes.

* Watch for the change in price for these route which can be initiated through search logs, if there is any significant change in fares, notify users regarding the change.

<!--Write about curator and multiple engagement through fare alerts  -->

## Further possibilities

<!--Write about personalizing fare alerts for more customized experience  -->
