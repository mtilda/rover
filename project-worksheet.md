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

#### MVP EXAMPLE
- Makes API calls and displays images from NAV, FHAZ, and RHAZ cameras on the screen
- User can navigate the photos fuilidly and intuitively
    - Next Photo / Previous Photo
    - Next Sol & Previous Sol buttons
    - FHAZ & RHAZ buttons

#### PostMVP EXAMPLE

- Add API calls for scientific cameras and corresponding UI buttons
    - MAST, CHEMCAM, MAHLI, MARDI, PANCAM, MINITES

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.



## Additional Libraries

## Code Snippet