Data Models
============

user Model
----------
.. code-block:: json

    {
	_id: 1234567,
	emp_id: 106,
	fname: "umashankar",
	lname: "somasekar",
	email: "umashankar.somasekar@rapidqube.com",
	photo: "https://www.someimagehost.com/aisdufads.jpg",
	address: [{
        street: "primary street",
        city: "mumbai"
		},
		{
			street: "secondary street",
			city: "chennai"
		}
	],
	reports_to: 543210,
	designation: "head of development",
	role: null,
	projects_maped: [p123, p234, p345],
	assets_info: [a123, a234, a345],
	access: ["employee", "manager"],
	current_leave_balance: 12,    
	doj: 25 - mar - 2017,
	status: "active",
	password_hash: kjl23hFDSCJDdajsdf1231hv2,
    multichain_wallet:{
            encrypted_public_key:"lghlJGIVS2312vklvldaAAvdlajd123qhvjd",
            encrypted_private_key:"lghlJGIVS2312vklvldaAAvdlajd123qhvjd",
            rapid_cash_balance: 50,
        }
    }

Ticket Model
------------
.. code-block:: json

    {
        _id: t123,
        date_created: 12-03-2017,
        created_by: 12345,
        subject: "OS reinstallation"
        description : "Since the system has become very slow and ther is a lot of junk in the machine, i need a OS reinstallation",
        assigned_to: [12345, 23445],
        current_assignee:23445,
        manager_approval_required: 'Y',
        approval_status: "pending",
        ticket_status: "waiting for approval",
        type : "INFRA",
        sub_type: "OS installation" 
        comments: [
                    {
                    "date" : ISODate("2017-02-10T10:50:42.389Z"),
                    "comment": "please mentonion the type of OS to be installed"
                    "comment_by":"Ajay"
                    }
                ],
        priority: "medium",        
        closed_on: ISODate("2017-03-10T10:50:42.389Z"),
        due_date: ISODate("2017-03-10T10:50:42.389Z")
    }

config
------
.. code-block:: json

    {
        key1 : "value",
        leave_carryover_percentage : 50,
        login_retry_count : 3,
        keyn : "valueN",
        optional_holidays : 4,
        default_infra_assignee: 5677,
        min_due_days_infra: 1 ,
        min_due_days_leaves : 5,
        min_due_days_finance: 3
    }

constants
---------
.. code-block:: json

    {
        leave_types : ["Earned Leave", "LOP"],
        priority_types : ["high", "medium", "low"],
        ticket_status_types : ["open", "in-progress", "waiting-for-approval", "re-opned", "closed"]
    }


Appraisal form
--------------
 <todo>


