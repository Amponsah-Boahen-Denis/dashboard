
document.addEventListener('DOMContentLoaded', () => {
    // Fetch data from the server
    fetch('https://back-api-mu.vercel.app/api/data1')
        .then(response => response.json())
        .then(data => {
            const { wallname, contact, projects } = data;

            // Base URL for images stored on imgbb
            const imgbbBaseURL = 'https://denis12.imgbb.com/'; // Ensure this URL is correct and accessible

            // Update global variables with wallname data
            if (wallname) {
                document.getElementById('name').value = wallname.name || '';
                document.getElementById('about').value = wallname.about || '';
                if (wallname.profile) {
                    const profilePreview = document.getElementById('profilePreview');
                    profilePreview.src = wallname.profile.startsWith('http') ? wallname.profile : `${imgbbBaseURL}${wallname.profile}`; // Use the URL from the database or construct it
                    profilePreview.crossOrigin = 'anonymous'; // Set crossOrigin attribute
                }
            }

            // Populate Contact fields
            if (contact) {
                document.getElementById('email').value = contact.email || '';
                document.getElementById('facebook').value = contact.facebook || '';
                document.getElementById('tiktok').value = contact.tiktok || '';
                document.getElementById('linkedin').value = contact.linkedin || '';
                document.getElementById('instagram').value = contact.instagram || '';
                document.getElementById('youtube').value = contact.youtube || '';
            }

            // Populate Projects fields
            if (projects) {
                document.getElementById('link1').value = projects.link1 || '';
                document.getElementById('link2').value = projects.link2 || '';
                document.getElementById('link3').value = projects.link3 || '';
                document.getElementById('link4').value = projects.link4 || '';

                // Helper function to set image source and crossOrigin attribute
                const setImageSrc = (elementId, imagePath) => {
                    if (imagePath) {
                        const imgElement = document.getElementById(elementId);
                        imgElement.src = imagePath.startsWith('http') ? imagePath : `${imgbbBaseURL}${imagePath}`; // Use the URL from the database or construct it
                        imgElement.crossOrigin = 'anonymous'; // Set crossOrigin attribute
                    }
                };

                setImageSrc('project1Preview', projects.project1Image);
                setImageSrc('project2Preview', projects.project2Image);
                setImageSrc('project3Preview', projects.project3Image);
                setImageSrc('project4Preview', projects.project4Image);
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});



// document.addEventListener('DOMContentLoaded', () => {
//     // Fetch data from the server
//     fetch('https://back-api-mu.vercel.app/api/data1')
//         .then(response => response.json())
//         .then(data => {
//             const { wallname, contact, projects } = data;

//             // Base URL for images stored in imgbb
//             const imgbbBaseURL = 'https://denis12.imgbb.com/'; // Ensure this is correct

//             // Update global variables with wallname data
//             if (wallname) {
//                 document.getElementById('name').value = wallname.name || '';
//                 document.getElementById('about').value = wallname.about || '';
//                 if (wallname.profile) {
//                     const profilePreview = document.getElementById('profilePreview');
//                     profilePreview.src = wallname.profile.startsWith('http') ? wallname.profile : `${imgbbBaseURL}${wallname.profile}`; // Construct URL if needed
//                     profilePreview.crossOrigin = 'anonymous'; // Set crossOrigin attribute
//                 }
//             }

//             // Populate Contact fields
//             if (contact) {
//                 document.getElementById('email').value = contact.email || '';
//                 document.getElementById('facebook').value = contact.facebook || '';
//                 document.getElementById('tiktok').value = contact.tiktok || '';
//                 document.getElementById('linkedin').value = contact.linkedin || '';
//                 document.getElementById('instagram').value = contact.instagram || '';
//                 document.getElementById('youtube').value = contact.youtube || '';
//             }

//             // Populate Projects fields
//             if (projects) {
//                 document.getElementById('link1').value = projects.link1 || '';
//                 document.getElementById('link2').value = projects.link2 || '';
//                 document.getElementById('link3').value = projects.link3 || '';
//                 document.getElementById('link4').value = projects.link4 || '';

//                 // Helper function to set image source and crossOrigin attribute
//                 const setImageSrc = (elementId, imagePath) => {
//                     if (imagePath) {
//                         const imgElement = document.getElementById(elementId);
//                         imgElement.src = imagePath.startsWith('http') ? imagePath : `${imgbbBaseURL}${imagePath}`; // Construct URL if needed
//                         imgElement.crossOrigin = 'anonymous'; // Set crossOrigin attribute
//                     }
//                 };

//                 setImageSrc('project1Preview', projects.project1Image);
//                 setImageSrc('project2Preview', projects.project2Image);
//                 setImageSrc('project3Preview', projects.project3Image);
//                 setImageSrc('project4Preview', projects.project4Image);
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
// });



// document.addEventListener('DOMContentLoaded', () => {
//     // Fetch data from the server
//     fetch('https://back-api-mu.vercel.app/api/data1')
//         .then(response => response.json())
//         .then(data => {
//             const { wallname, contact, projects } = data;

//             // Update global variables with wallname data
//             if (wallname) {
//                 document.getElementById('name').value = wallname.name || '';
//                 document.getElementById('about').value = wallname.about || '';
//                 if (wallname.profile) {
//                     const profilePreview = document.getElementById('profilePreview');
//                     profilePreview.src = wallname.profile; // Use the full URL from the database
//                     profilePreview.crossOrigin = 'anonymous'; // Set crossOrigin attribute
//                 }
//             }

//             // Populate Contact fields
//             if (contact) {
//                 document.getElementById('email').value = contact.email || '';
//                 document.getElementById('facebook').value = contact.facebook || '';
//                 document.getElementById('tiktok').value = contact.tiktok || '';
//                 document.getElementById('linkedin').value = contact.linkedin || '';
//                 document.getElementById('instagram').value = contact.instagram || '';
//                 document.getElementById('youtube').value = contact.youtube || '';
//             }

//             // Populate Projects fields
//             if (projects) {
//                 document.getElementById('link1').value = projects.link1 || '';
//                 document.getElementById('link2').value = projects.link2 || '';
//                 document.getElementById('link3').value = projects.link3 || '';
//                 document.getElementById('link4').value = projects.link4 || '';

//                 // Helper function to set image source and crossOrigin attribute
//                 const setImageSrc = (elementId, imagePath) => {
//                     if (imagePath) {
//                         const imgElement = document.getElementById(elementId);
//                         imgElement.src = imagePath; // Use the full URL from the database
//                         imgElement.crossOrigin = 'anonymous'; // Set crossOrigin attribute
//                     }
//                 };

//                 setImageSrc('project1Preview', projects.project1Image);
//                 setImageSrc('project2Preview', projects.project2Image);
//                 setImageSrc('project3Preview', projects.project3Image);
//                 setImageSrc('project4Preview', projects.project4Image);
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
// });


// document.addEventListener('DOMContentLoaded', () => {
//     // Fetch data from the server
//     fetch('https://back-api-mu.vercel.app/api/data1')
//         .then(response => response.json())
//         .then(data => {
//             const { wallname, contact, projects } = data;

//             // Base URL for images stored in imgbb (example URL structure)
//             const imgbbBaseURL = 'https://i.ibb.co/'; // This should match the URL structure where your images are hosted

//             // Update global variables with wallname data
//             if (wallname) {
//                 document.getElementById('name').value = wallname.name || '';
//                 document.getElementById('about').value = wallname.about || '';
//                 if (wallname.profile) {
//                     const profilePreview = document.getElementById('profilePreview');
//                     profilePreview.src = wallname.profile.startsWith('http') ? wallname.profile : `${imgbbBaseURL}${wallname.profile}`; // Use the URL from the database or construct it
//                     profilePreview.crossOrigin = 'anonymous'; // Set crossOrigin attribute
//                 }
//             }

//             // Populate Contact fields
//             if (contact) {
//                 document.getElementById('email').value = contact.email || '';
//                 document.getElementById('facebook').value = contact.facebook || '';
//                 document.getElementById('tiktok').value = contact.tiktok || '';
//                 document.getElementById('linkedin').value = contact.linkedin || '';
//                 document.getElementById('instagram').value = contact.instagram || '';
//                 document.getElementById('youtube').value = contact.youtube || '';
//             }

//             // Populate Projects fields
//             if (projects) {
//                 document.getElementById('link1').value = projects.link1 || '';
//                 document.getElementById('link2').value = projects.link2 || '';
//                 document.getElementById('link3').value = projects.link3 || '';
//                 document.getElementById('link4').value = projects.link4 || '';

//                 // Helper function to set image source and crossOrigin attribute
//                 const setImageSrc = (elementId, imagePath) => {
//                     if (imagePath) {
//                         const imgElement = document.getElementById(elementId);
//                         imgElement.src = imagePath.startsWith('http') ? imagePath : `${imgbbBaseURL}${imagePath}`; // Use the URL from the database or construct it
//                         imgElement.crossOrigin = 'anonymous'; // Set crossOrigin attribute
//                     }
//                 };

//                 setImageSrc('project1Preview', projects.project1Image);
//                 setImageSrc('project2Preview', projects.project2Image);
//                 setImageSrc('project3Preview', projects.project3Image);
//                 setImageSrc('project4Preview', projects.project4Image);
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
// });



// document.addEventListener('DOMContentLoaded', () => {
//     // Fetch data from the server
//     fetch('https://back-api-mu.vercel.app/api/data')
//         .then(response => response.json())
//         .then(data => {
//             const { wallname, contact, projects } = data;

//             // Update global variables with wallname data
//             if (wallname) {
//                 document.getElementById('name').value = wallname.name || '';
//                 document.getElementById('about').value = wallname.about || '';
//                 if (wallname.profile) {
//                     const profilePreview = document.getElementById('profilePreview');
//                     profilePreview.src = wallname.profile; // Use the URL directly from the database
//                     profilePreview.crossOrigin = 'anonymous'; // Set crossOrigin attribute
//                 }
//             }

//             // Populate Contact fields
//             if (contact) {
//                 document.getElementById('email').value = contact.email || '';
//                 document.getElementById('facebook').value = contact.facebook || '';
//                 document.getElementById('tiktok').value = contact.tiktok || '';
//                 document.getElementById('linkedin').value = contact.linkedin || '';
//                 document.getElementById('instagram').value = contact.instagram || '';
//                 document.getElementById('youtube').value = contact.youtube || '';
//             }

//             // Populate Projects fields
//             if (projects) {
//                 document.getElementById('link1').value = projects.link1 || '';
//                 document.getElementById('link2').value = projects.link2 || '';
//                 document.getElementById('link3').value = projects.link3 || '';
//                 document.getElementById('link4').value = projects.link4 || '';

//                 // Helper function to set image and crossOrigin attribute
//                 const setImageSrc = (elementId, imagePath) => {
//                     if (imagePath) {
//                         const imgElement = document.getElementById(elementId);
//                         imgElement.src = imagePath; // Use the URL directly from the database
//                         imgElement.crossOrigin = 'anonymous'; // Set crossOrigin attribute
//                     }
//                 };

//                 setImageSrc('project1Preview', projects.project1Image);
//                 setImageSrc('project2Preview', projects.project2Image);
//                 setImageSrc('project3Preview', projects.project3Image);
//                 setImageSrc('project4Preview', projects.project4Image);
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
// });



// document.addEventListener('DOMContentLoaded', () => {
//     // Fetch data from the server
//     fetch('https://back-api-mu.vercel.app/api/data')
//         .then(response => response.json())
//         .then(data => {
//             const { wallname, contact, projects } = data;

//             // Base URL for images stored in the GitHub repository
//             const githubBaseURL = 'https://raw.githubusercontent.com/Amponsah-Boahen-Denis/imagesfiles/main/textures/';

//             // Populate Wallname fields
//             if (wallname) {
//                 document.getElementById('name').value = wallname.name || '';
//                 document.getElementById('about').value = wallname.about || '';
//                 if (wallname.profile) {
//                     const profileImageURL = wallname.profile.startsWith('/textures/')
//                         ? `${githubBaseURL}${wallname.profile.split('/').pop()}`
//                         : wallname.profile;

//                     const profilePreview = document.getElementById('profilePreview');
//                     profilePreview.src = profileImageURL;
//                     profilePreview.crossOrigin = 'anonymous'; // Set crossOrigin attribute
//                 }
//             }

//             // Populate Contact fields
//             if (contact) {
//                 document.getElementById('email').value = contact.email || '';
//                 document.getElementById('facebook').value = contact.facebook || '';
//                 document.getElementById('tiktok').value = contact.tiktok || '';
//                 document.getElementById('linkedin').value = contact.linkedin || '';
//                 document.getElementById('instagram').value = contact.instagram || '';
//                 document.getElementById('youtube').value = contact.youtube || '';
//             }

//             // Populate Projects fields
//             if (projects) {
//                 document.getElementById('link1').value = projects.link1 || '';
//                 document.getElementById('link2').value = projects.link2 || '';
//                 document.getElementById('link3').value = projects.link3 || '';
//                 document.getElementById('link4').value = projects.link4 || '';

//                 // Helper function to set image and crossOrigin attribute
//                 const setImageSrc = (elementId, imagePath) => {
//                     if (imagePath) {
//                         const imgURL = imagePath.startsWith('/textures/')
//                             ? `${githubBaseURL}${imagePath.split('/').pop()}`
//                             : imagePath;

//                         const imgElement = document.getElementById(elementId);
//                         imgElement.src = imgURL;
//                         imgElement.crossOrigin = 'anonymous'; // Set crossOrigin attribute
//                     }
//                 };

//                 setImageSrc('project1Preview', projects.project1Image);
//                 setImageSrc('project2Preview', projects.project2Image);
//                 setImageSrc('project3Preview', projects.project3Image);
//                 setImageSrc('project4Preview', projects.project4Image);
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
// });


