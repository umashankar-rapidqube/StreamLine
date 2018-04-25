Leaves 
======
    This process flow explains process flow of leaves management

Process
------------

    - An Employee will be able to do following tasks
        - Raise a leave request
        - check his lave balances
        - View is past requests
        - cancel his leave request before approval
        - Modify his leave request before approval
        - Encash if he as more than x amount of leave balance

    - His/her Reporting manager should be able to do following tasks
        - all the leaves submitted
        - approve / request info/ decline for the leaves submitted
        - after approval the request should be closed to editing

    - Admin
        -should be able to Modify the leaves even after approval
        -allocation of leaves to every employee on day1 -April 1st - automated
        -Define the anual allocation of leaves
        -Deifine a carryover criteria
        *ex: 50% of the balance can be carried over to next year*
          
    
Raising a leave Request:
------------------------
    - Employee should have enough leave balance to apply     
    - In case of insufficent leave balance , an employee can still raise a request 
      but will be considered as unpaid leave (salary deduction will be applicable)
      in which case a notification will be sent to Finance
    - Employee should recieve a notification on the requests raised and status changes  
    
Types of leaves
---------------
    - Earned Leave
    - LOP - Loss Of Pay
    - Optional Holiday
