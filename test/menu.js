let modifiedMenuItems =  [
        {
            "navlabel": true,
            "subheader": "Manage Navbar",
            "href": "/admin/admin_master1512/?tabs=null",
            "permission_id": 40
        },
        {
            "id": "1",
            "title": "Manage Nav Items",
            "icon": "IconNotes",
            "href": "/admin/admin_master1512/?tabs=nav-items ",
            "permission_id": 40
        },
        {
            "id": "2",
            "title": "Manage SubItem Navigation",
            "icon": "IconListTree",
            "href": "/admin/admin_master1512/?tabs=sub-nav-items ",
            "permission_id": 42
        },
        {
            "id": "3",
            "title": "Permission management",
            "icon": "IconUserPlus",
            "href": "/admin/admin_master1512/?tabs=permission-management ",
            "permission_id": 66
        },
        {
            "id": "4",
            "title": "Add Capabilites",
            "icon": "IconAffiliateFilled",
            "href": "/admin/admin_master1512/?tabs=add-capabilites ",
            "permission_id": 97
        },
        {
            "id": "5",
            "title": "Assing Menu to Roles",
            "icon": "IconUserCheck",
            "href": "/admin/admin_master1512/?tabs=menu-assigned-to-roles ",
            "permission_id": 43
        },
        {
            "navlabel": true,
            "subheader": "Requests",
            "href": "/admin/admin_master1512/?tabs=null",
            "permission_id": 45
        },
        {
            "id": "6",
            "title": "Driver Onboard AMS",
            "icon": "IconAccessibleOffFilled",
            "href": "/admin/admin_master1512/?tabs=driver-onboard-ams ",
            "permission_id": 45
        },
        {
            "id": "7",
            "title": "Kyc request approvals",
            "icon": "IconUserPlus",
            "href": "/admin/admin_master1512/?tabs=kyc-request-approval ",
            "permission_id": 67
        },
        {
            "navlabel": true,
            "subheader": "Roles",
            "href": "/admin/admin_master1512/?tabs=null",
            "permission_id": 48
        },
        {
            "id": "8",
            "title": "Assign roles",
            "icon": "IconUserPlus",
            "href": "/admin/admin_master1512/?tabs=assing-roles ",
            "permission_id": 48
        },
        {
            "id": "9",
            "title": "Role management",
            "icon": "IconUsersGroup",
            "href": "/admin/admin_master1512/?tabs=role-management ",
            "permission_id": 65
        },
        {
            "navlabel": true,
            "subheader": "Users",
            "href": "/admin/admin_master1512/?tabs=null",
            "permission_id": 49
        },
        {
            "id": "10",
            "title": "User Management",
            "icon": "IconCrown",
            "href": "/admin/admin_master1512/?tabs=user-management ",
            "permission_id": 49
        },
        {
            "navlabel": true,
            "subheader": "Vehicle Types",
            "href": "/admin/admin_master1512/?tabs=/vhicle-types",
            "permission_id": 96
        },
        {
            "id": "11",
            "title": "Vhicle types",
            "icon": "IconCamper",
            "href": "/admin/admin_master1512/?tabs=vhicle-types ",
            "permission_id": 96
        }
    ]

const capHasPermissions =  [
        {
            "permission_id": 42,
            "permission_name": "Manage Sub Item navigation ",
            "id": 99,
            "capability_id": 17,
            "created_on": "2025-10-11T20:23:42.558Z",
            "updated_on": "2025-10-11T20:23:42.557Z"
        },
        {
            "permission_id": 43,
            "permission_name": "Allow Assing Menu to Roles",
            "id": 100,
            "capability_id": 17,
            "created_on": "2025-10-11T20:23:42.558Z",
            "updated_on": "2025-10-11T20:23:42.557Z"
        },
        {
            "permission_id": 63,
            "permission_name": "Allow Active customers",
            "id": 87,
            "capability_id": 18,
            "created_on": "2025-08-31T21:53:43.754Z",
            "updated_on": "2025-08-31T21:53:43.752Z"
        },
        {
            "permission_id": 64,
            "permission_name": "Allow Customer management",
            "id": 88,
            "capability_id": 18,
            "created_on": "2025-08-31T21:53:43.754Z",
            "updated_on": "2025-08-31T21:53:43.752Z"
        },
        {
            "permission_id": 65,
            "permission_name": "allow Role management",
            "id": 89,
            "capability_id": 18,
            "created_on": "2025-08-31T21:53:43.754Z",
            "updated_on": "2025-08-31T21:53:43.752Z"
        },
        {
            "permission_id": 69,
            "permission_name": "Allow Notifications",
            "id": 93,
            "capability_id": 17,
            "created_on": "2025-08-31T22:07:33.073Z",
            "updated_on": "2025-08-31T22:07:33.068Z"
        },
        {
            "permission_id": 70,
            "permission_name": "Allow Upcoming Rides",
            "id": 94,
            "capability_id": 17,
            "created_on": "2025-08-31T22:07:33.073Z",
            "updated_on": "2025-08-31T22:07:33.068Z"
        },
        {
            "permission_id": 75,
            "permission_name": "Allow Payment History",
            "id": 86,
            "capability_id": 17,
            "created_on": "2025-08-31T21:47:14.803Z",
            "updated_on": "2025-08-31T21:47:14.802Z"
        },
        {
            "permission_id": 76,
            "permission_name": "Allow All Rides (duplicate)",
            "id": 91,
            "capability_id": 17,
            "created_on": "2025-08-31T21:55:04.468Z",
            "updated_on": "2025-08-31T21:55:04.465Z"
        },
        {
            "permission_id": 77,
            "permission_name": "Allow Filter by Date",
            "id": 90,
            "capability_id": 17,
            "created_on": "2025-08-31T21:55:04.468Z",
            "updated_on": "2025-08-31T21:55:04.465Z"
        },
        {
            "permission_id": 81,
            "permission_name": "Allow Upload Documents",
            "id": 85,
            "capability_id": 17,
            "created_on": "2025-08-31T21:47:14.803Z",
            "updated_on": "2025-08-31T21:47:14.802Z"
        },
        {
            "permission_id": 82,
            "permission_name": "Allow View Documents",
            "id": 84,
            "capability_id": 17,
            "created_on": "2025-08-31T21:47:14.803Z",
            "updated_on": "2025-08-31T21:47:14.802Z"
        },
        {
            "permission_id": 84,
            "permission_name": "Allow Contact Support",
            "id": 83,
            "capability_id": 18,
            "created_on": "2025-08-31T21:46:29.047Z",
            "updated_on": "2025-08-31T21:46:29.046Z"
        },
        {
            "permission_id": 85,
            "permission_name": "Allow FAQs",
            "id": 82,
            "capability_id": 18,
            "created_on": "2025-08-31T21:46:29.047Z",
            "updated_on": "2025-08-31T21:46:29.046Z"
        },
        {
            "permission_id": 86,
            "permission_name": "Allow Confirm Logout",
            "id": 81,
            "capability_id": 18,
            "created_on": "2025-08-31T21:46:29.047Z",
            "updated_on": "2025-08-31T21:46:29.046Z"
        },
        {
            "permission_id": 88,
            "permission_name": "allow Assign Driver",
            "id": 97,
            "capability_id": 17,
            "created_on": "2025-10-11T20:22:43.433Z",
            "updated_on": "2025-10-11T20:22:43.414Z"
        }
    ]

let menu = modifiedMenuItems.filter(ele=> capHasPermissions.some(innerEle=> innerEle?.permission_id == ele.permission_id ) )

console.log(menu)