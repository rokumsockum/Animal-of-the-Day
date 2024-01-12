let arrImg = [ //array of animal images as data source
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Marabou_Stork_at_Animal_Kingdom_Lodge.jpg/640px-Marabou_Stork_at_Animal_Kingdom_Lodge.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/4/46/Ring_tailed_lemur_and_twins.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/a/a4/Tragelaphus_angasii_-_female_-_Disney%27s_Animal_Kingdom_Lodge_-_1.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/2/22/Jelly_Monterey.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/7/71/2010-kodiak-bear-1.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/8/8c/Animal_Kingdom_265659.jpg',
    'http://r.ddmcdn.com/w_830/s_f/o_1/cx_98/cy_0/cw_640/ch_360/APL/uploads/2015/07/cecil-AP463227356214-1000x400.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Disney-Animal-Kingdom-Komodo-Dragon-8187.jpg/640px-Disney-Animal-Kingdom-Komodo-Dragon-8187.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Giraffe_at_Disney_Animal_Kingdom_Lodge.jpg/640px-Giraffe_at_Disney_Animal_Kingdom_Lodge.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Hippotragus_equinus_-_Disney%27s_Animal_Kingdom_Lodge%2C_Orlando%2C_Florida%2C_USA_-_20100119.jpg/640px-Hippotragus_equinus_-_Disney%27s_Animal_Kingdom_Lodge%2C_Orlando%2C_Florida%2C_USA_-_20100119.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Gar%C3%A7a-real%2C_Grey_Heron_%2849025137027%29.jpg/640px-Gar%C3%A7a-real%2C_Grey_Heron_%2849025137027%29.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Sargo_real_%28Diplodus_cervinus%29%2C_franja_marina_Teno-Rasca%2C_Tenerife%2C_Espa%C3%B1a%2C_2022-01-09%2C_DD_49.jpg/640px-Sargo_real_%28Diplodus_cervinus%29%2C_franja_marina_Teno-Rasca%2C_Tenerife%2C_Espa%C3%B1a%2C_2022-01-09%2C_DD_49.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/A_Real_Nutjob_%286473284033%29.jpg/640px-A_Real_Nutjob_%286473284033%29.jpg'
]

const randomImage = (animalArray) => {
    const indexNum = Math.floor(Math.random() * animalArray.length);//Assign random number to indexNum between 0 and the length of the passed array.
    return {     //Return an object containing the number of the animal and the URL string to the image location.
        total: animalArray.length,
        number: indexNum,
        image: arrImg[indexNum]}
}

const animal = randomImage(arrImg);

const app = Vue.createApp({
    data: function() {
        return {
            callToAction: 'Guess the animal!',
            totalAnimals: animal.total,
            animalImage: animal.image,
            animalNumber: animal.number +1
            
        };
    }
});

app.mount('#user-goal');