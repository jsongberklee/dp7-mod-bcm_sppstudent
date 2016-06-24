* OVERVIEW ***********************************************************

This module is specifically used for validating Berklee summer 5 week student and letting them to use Learning center training signup system (https://learningcenter.berklee.edu).

It also can be used to add any new user with the validation, for example in case if you need to validate Pro Art students, just insert the name and ID accoring to "bcm_sppstudent" table in the database.

The validator will check/find the match in "bcmid" field with the user typed id number and if the id is found, grabs the name and asks for email and password, then it will create a user account with "student spp" and "authenticated user" roles attached to it. 


* USAGE **************************************************************

1. click the link "Click here first if you are a five week student" on the login page or block, and type Berklee ID and click "Verify Me" button.

2. fill out email address and choose password for the account and click "Create My Account"

3. go back to login page or block and login using the email and password you typed in. 


* INSTALLATION & SET UP **********************************************

1. Copy the module folder to /sites/all/modules/ and activate.

2. Prepare the user data as .csv file with bcmid, fullname, firstname, lastname and barcode(optional). Note: bcmid is the one get validated, you can use other "VARCHAR" as you need to.

3. Import the .csv file to "bcm_sppstudent" table in the database.

** disable bcm_login and all LDAP modules to ensure.

* UN-INSTALLATION / DEACTIVATE THE MODULE ****************************

Disabling the module will deactivate.

The "bcm_sppstudent" table won't be deleted even if you uninstall the module, this is intentional due to safely keeping the usage data.

You have to manually flush or delete table if you need to.


* CONTACT ************************************************************

JAESUNG SONG (jsong@berklee.edu) : Maintainer
