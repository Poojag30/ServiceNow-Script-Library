# ServiceNow-Script-Library
The ServiceNow Script Library is a collection of reusable scripts and utilities that can be used to solve common tasks in ServiceNow. It includes server-side and client-side scripting, REST API examples, and integration code. The goal is to provide developers with a library of solutions that can be easily adapted and integrated into their own ServiceNow instances, speeding up development and maintaining code quality.

## Server-side Scripts:
This section covers reusable server-side scripts that can be used for automating processes, querying data, and extending functionality on the backend. These scripts will help with tasks like enforcing business logic, performing CRUD operations, and scheduling jobs.

**1.Business Rules** are server-side scripts that execute when a record is inserted, updated, or deleted. They are ideal for enforcing business logic across the platform.
Types:

**Before Business Rule** : Runs before the database action (insert, update, delete) takes place, allowing you to modify records before they are saved.

**After Business Rule** : Runs after the record has been inserted or updated in the database.

**Async Business Rule** : Runs after the database action, but in a separate thread, allowing long-running processes to run asynchronously without affecting the user's experience.

**Display Business Rule** : Runs when a record is retrieved from the database and is about to be displayed to the user (e.g., to populate client-side information).

