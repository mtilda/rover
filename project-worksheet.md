# Project Overview

## Project Links

- [add deployment link]()

## Project Description

For this project, I plan to build a Mars rover first-person experiece. The user will be able to view images gathered by the Curiosity, Opportunity, and Spirit rovers during their missions. The images for this application will be fetched from NASA's Mars Rover Photos API. My hope is that someday this project will be used as an educational tool for students and citizen-scientists who want to feel closer to Mars.

## API

[Documentation](https://api.nasa.gov/)

https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY

```
{
    "photos": [
        {
            "id": 102693,
            "sol": 1000,
            "camera": {
            "id": 20,
            "name": "FHAZ",
            "rover_id": 5,
            "full_name": "Front Hazard Avoidance Camera"
            },
            "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG",
            "earth_date": "2015-05-30",
            "rover": {
                "id": 5,
                "name": "Curiosity",
                "landing_date": "2012-08-06",
                "launch_date": "2011-11-26",
                "status": "active"
            }
        },
        {
            "id": 102694,
            "sol": 1000,
            "camera": {
            "id": 20,
            "name": "FHAZ",
            "rover_id": 5,
            "full_name": "Front Hazard Avoidance Camera"
            },
            "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FRB_486265257EDR_F0481570FHAZ00323M_.JPG",
            "earth_date": "2015-05-30",
            "rover": {
                "id": 5,
                "name": "Curiosity",
                "landing_date": "2012-08-06",
                "launch_date": "2011-11-26",
                "status": "active"
            }
        }
    ]
}
```


## Wireframes

- [wireframes](https://www.figma.com/file/rixFJgJxoWV65ZwZ9QWDzD/Untitled?node-id=0%3A1)
- [react architecture]()


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP
- Makes API calls and displays images from NAVCAM, FHAZ, and RHAZ cameras
- Makes API calls for photos from Curiosity, Opportunity, and Spirit rovers
- User can navigate the photos fuilidly and intuitively using buttons
    - Next Photo / Previous Photo
    - Next Sol & Previous Sol buttons
    - NAVCAM, FHAZ, & RHAZ buttons
- User can switch between rovers using the hamburger menu
- Onscreen text displays information about the current query
    - Sol
    - Earth Date
- User can search for a Sol or Earth Date

#### PostMVP

- Add API calls for scientific cameras and corresponding UI buttons
    - MAST, CHEMCAM, MAHLI, MARDI, PANCAM, MINITES

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful. 

| Component | Description | 
| --- | :---: |  
| App | sets up app with React Router
| CurrentImage | displays the current image obtained from the API call
| Menu (Hamburger) | allows the user to switch between rovers and access additional settings
| NextSol & PreviousSol | buttons that allow the user to increment or decrement the Sol
| Sol | displays the current sol being used in search queries; allows text input to search for a specific Sol
| EarthDate | displays the earth date corresponding to the current Sol; allows text input to search for a specific Earth Date
| NextPhoto & PreviousPhoto | increment or decrement the photo that matches the current query
| Special Camera Buttons | display when images are available from special camreas; switches query to match special cameras
| ToggleViewUI | a button that toggles the visibility of the UI

Unless otherwise noted, time is listed in hours:

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create React app and files for all components | H | 0 | 0 | 40min
| Build function to fetch data from the API based on current settings | 
| Display current image fetched from the API | 
| Build hamberger menu |
| Build buttons (in menu) that switch between the rovers | 
| Build NextSol & PreviousSol buttons and link them to the search query | 
| Build display of current Sol |
| Modify CurrentSol to accept user input |
| Build display of current Earth Date | 
| Modify CurrentEarthDate to accept user input |
| Build NextPhoto & PreviousPhoto buttons | 
| Build Special Camera Buttons | 
| Build bubble counters that display count of images available | 
| Built button to toggle the visiability of the UI | 

## Additional Libraries
React
Bootstrap

## Code Snippet
