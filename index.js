/*
 * This is here to help do any setups
 * prior to running the application,
 * such as reading environment variables,
 * fetching additional resources, etc.
 * This is also invaluable for settings
 * cwd for any hosting applications like
 * IIS as it steps into the directory of
 * where the executed entry file is
 * located at
 */ 

require('./dist/index');
