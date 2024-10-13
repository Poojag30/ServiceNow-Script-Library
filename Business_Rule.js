Example: Preventing a record from being updated after submission


// Business Rule to prevent updates to a submitted record
(function executeRule(current, previous /*null when async*/) {
    if (current.state == 'submitted' && previous.state != 'submitted') {
        gs.addErrorMessage('You cannot update a record after it has been submitted.');
        current.setAbortAction(true);
    }
})(current, previous);

