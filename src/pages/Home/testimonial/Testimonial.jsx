import React from 'react';
import Review from './Review';
import quote from '../../../assets/quote.svg'
import people1 from '../../../assets/people1.png';
import people2 from '../../../assets/people2.png';
import people3 from '../../../assets/people3.png';

const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            img: people1,
            review: 'Great service, delivery, price and product! Quality of products are amazing. Will be using you',
            location: 'California'
        },
        {
            _id: 2,
            name: 'Winson Herry',
            img: people2,
            review: 'Great service, delivery, price and product! Quality of products are amazing. Will be using you',
            location: 'California'
        },
        {
            _id: 3,
            name: 'Winson Herry',
            img: people3,
            review: 'Great service, delivery, price and product! Quality of products are amazing. Will be using you',
            location: 'California'
        },
    ]

    return (
        <div>
            <section className='my-16'>
                <div>
                    <h4 className="text-2xl font-semibold text-center mb-5">Testimonial</h4>
                    <h2 className="text-5xl font-bold text-center mb-5">What Clients Says</h2>
                    <p className='text-center mb-5'>Blandit libero volutpat sed cras ornare arcu dui vivamus.
                        Proin fermentum leo vel orci porta non</p>
                </div>

                <figure>
                    <img className='w-12 lg:w-24' src={quote} alt="" />
                </figure>

                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        >
                        </Review>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Testimonial;