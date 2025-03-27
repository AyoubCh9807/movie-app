import { v4 as uuidv4 } from 'uuid'

interface Movie {
    title: string;
    desc: string;
    sourceCover: string;
    id: string | number;
}

class Movie {
    constructor(title: string, desc: string, sourceCover: string, id: number | string) {
        this.title = title,
        this.desc = desc,
        this.sourceCover = sourceCover
        this.id = id
    }
}



let movies = [
    new Movie('Power Rangers',      'A group of teens transform into superheroes to save the world from evil.',                              '/images/MovieCovers/cover6.jpg', uuidv4()),
    new Movie('Squid Game',         'Contestants play deadly games for a chance to win a life-changing sum of money.',                       '/images/MovieCovers/cover13.webp' , uuidv4()),
    new Movie('Zero Day',           'A gripping thriller about a cyber attack that threatens national security.',                            '/images/MovieCovers/cover17.webp', uuidv4()),
    new Movie('Avengers',           'Superheroes unite to save the world from a powerful alien threat.',                                     '/images/MovieCovers/cover5.jpg', uuidv4()),
    new Movie('Dog Man',            'A lovable dog teams up with a boy to solve mysteries and save the day.',                                '/images/MovieCovers/cover1.jpg', uuidv4()),
    new Movie('Heart Eyes',         'A romantic comedy about love at first sight and the chaos that follows.',                               '/images/MovieCovers/cover2.jpg', uuidv4()),
    new Movie('Sonic 2',            'Sonic teams up with his friends to stop Dr. Robotnik from conquering the world.',                       '/images/MovieCovers/cover3.jpg', uuidv4()),
    new Movie('Anime Manga',        'An animated adventure that brings beloved manga characters to life.',                                   '/images/MovieCovers/cover4.jpg', uuidv4()),
    new Movie('The Dark Knight',    'Batman faces off against the Joker in a battle for Gotham City.',                                       '/images/MovieCovers/cover7.jpg', uuidv4()),
    new Movie('Dubai Bling',        'Step into a high-flying social circle in Dubai filled with lavish parties and stunning fashion.',       '/images/MovieCovers/cover0.webp', uuidv4()),
    new Movie('Spartacus',          'A slave leads a rebellion against the Roman Empire in this epic tale of freedom.',                      '/images/MovieCovers/cover8.jpg', uuidv4()),
    new Movie('Medusa',             'A thrilling tale of betrayal and revenge set in the world of ancient mythology.',                       '/images/MovieCovers/cover14.webp', uuidv4()),
    new Movie('Back in Action',     'An action-packed adventure where heroes return to save the day once more.',                             '/images/MovieCovers/cover10.webp', uuidv4()),
    new Movie('Le Guépard',         'A classic story of a noble family during the Italian unification, filled with drama and intrigue.',     '/images/MovieCovers/cover9.webp', uuidv4()),
    new Movie('Juste Un Regard',    'A suspenseful drama about a woman whose life spirals out of control after a single glance.',            '/images/MovieCovers/cover11.webp', uuidv4()),
    new Movie('The Night Agent',    'A gripping political thriller that follows an FBI agent caught in a web of conspiracy.',                '/images/MovieCovers/cover12.webp', uuidv4()),
    new Movie('Formula 1',          'Experience the high-speed world of Formula 1 racing and the fierce competition behind the scenes.',     '/images/MovieCovers/cover15.webp', uuidv4()),
    new Movie('Cobra Kai',          'A nostalgic return to the dojo where rivalries reignite and new challenges arise.',                     '/images/MovieCovers/cover16.webp', uuidv4())
];
export default movies