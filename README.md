# About project:

This project is about pagination, which is the subject I was studying during the week. It is a simple crud, but it contains the pagination that has a great logic behind it.

**OBS:**
---

The theme: presidents and countries is just to get concrete data for the pagination, but any theme would fit.

# Technologies used:

- Node:
  - Express;
  - Sequelize;
  - Sequelize-cli;
  - Mysql2;
  - Dotenv

# Explanation of the project: 

Let's go to the main file: pagination, because this is what I want to explain to learn more about.

I'll just take the country flie, which has a join with the table of presidents.

### Countries:

```
// Express instace.
const express = require('express');

// Country model to capture data in the future.
const Countries = require('../../model/Countries');

async function Pagination(req, res) {
	// Get, through the query that comes in the url, the page specifies that it is desired.
	var page = parseInt(req.query.page);

	// Take, through the query that comes in the url, the specific limit that is desired.
	var limit = parseInt(req.query.limit);

	// Search the database in the countries table, which joins the presidents table, so your data is also included in the search result.
	var FindCountries = await Countries.findAll({include: { 
			association: 'president',
			attributes: ['name'],
		}});

	// Here you will remove one from the page value so that it is in the right position of the array, as it starts with 0. Right after, it multiplies by the limit.
	const startIndex = (page - 1) * limit;

	// Multiply the page by the limit, so you will know how far to display the array.
	const endIndex = page * limit;

	// Creates an empty object.
	const results = {};

	// Through the result object, it creates the index countries that receive the data and with the slice method it searches for the desired start to start the array and how far it should go.
	results.countries = FindCountries.slice(startIndex, endIndex);

	// This makes you see what the current page is and add one more to go to the next one.
	if (endIndex < findPresident.length) {
		results.next = {
			page: page + 1,
			limit: limit
		}
	}

	// This makes you see what the current page is, and right after you remove one to go back one page.
	if (startIndex > 0) {
		results.previous = {
			page: page - 1,
			limit: limit
		}
	}


	// Show the object results
	res.send(results);
}

module.exports = Pagination;
```