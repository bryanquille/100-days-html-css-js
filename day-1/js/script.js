const testimonialBox = document.querySelector("#testimonial-box");

const showTestimonials = (array, index, testimonial) => {
    testimonialBox.innerHTML = `
    <img src="${array[index].picture.medium}" alt="foto de ${array[index].name}" class="user-img" />
    <p class="testimonial-text">"${testimonial[index].length > 150 ? testimonial[index].slice(0, 151) + "..." : testimonial[index]}"</p>
    <p class="user-info">-- ${array[index].name.first} ${array[index].name.last}</p>
    `;
}

const getUserData = async () => {
    try {
        // Getting user data (Name and photo)
        const response1 = await fetch("https://randomuser.me/api/?results=5");
        const data1 = await response1.json();
        const users = data1.results;

        // Geeting testinomial text (Bacom ipsum)
        const response2 = await fetch("https://baconipsum.com/api/?type=all-meat&paras=5");
        const data2 = await response2.json();

        // Showing testimonials
        let i = 0;
        let supply = 1;
        showTestimonials(users, i, data2);
        setInterval(() => {
            if (i === 0 && supply == 1) {
                i++;
                showTestimonials(users, i, data2);
                supply = 0;
            } else if (i < users.length) {
                showTestimonials(users, i, data2);
            } else {
                i = -1;
            }
            i++;
        }, 5000);
    } catch (error) {
        alert("Sorry, somethig went wrong, please reload the page.")
    }
}

getUserData();