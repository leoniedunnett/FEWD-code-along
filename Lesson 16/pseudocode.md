## To Do List API
1.	addNewItem
2.	removeItem
3.	editItem
4.	saveItem
5.	switchStatus (complete or incomplete)
6.	emptyList
7.	removeCompleted
8.	updateCount (.length)

##Pseudocode

1.	When user submits new item
	*	Get user input value
	*	Append item to list
    *   Update count

2.	When the user clicks remove
	*	Select the item
	*	Delete it
    *   Update count

3.	When the user clicks the edit
	*	Select the item
	*	Replace list item content with input with same value as existing text
    *   Save item on submit or when it looses focus

4.	When the user submits edited item or it looses focus
	*	Get the value of the input inside of this item
	*	Replace the input in the list item with the value of the input field

5.	When the user clicks on the list item
	*	Add a css line-through style to the item
    *   Update count

6.	When the user clicks the Clear List button
	*	Select the list
	*	Empty the list

7.	When the users clicks the Clear Completed button
	*	Select completed to-do list items
	*	Remove them

8.	To-do list item counter
	*	Set the text inside the to-do list counter element to the number of items in the to-do list