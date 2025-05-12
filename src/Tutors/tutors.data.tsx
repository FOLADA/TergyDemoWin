const tutors = [
    {
      id: 1,
      slug: 'nino-beridze',
      name: 'XX',
      tagline: 'გამოცდილი ქართული ლიტერატურის სპეციალისტი 10+ წლიანი გამოცდილებით',
      bio: `XX ფლობს ფილოსოფიის დოქტორის ხარისხს ქართულ ლიტერატურაში თბილისის სახელმწიფო უნივერსიტეტიდან. მისი ინოვაციური სწავლების მეთოდები ასობით სტუდენტს დაეხმარა კლასიკური და თანამედროვე ქართული ტექსტების ათვისებაში. ის სპეციალიზირებულია რთული ლიტერატურული კონცეფციების ყველასთვის ხელმისაწვდომად გადაცემაში.`,
      achievements: [
        'გამოქვეყნებული აქვს 3 წიგნი ქართულ პოეზიაზე',
        '2019 წლის ეროვნული სწავლების სრულყოფილების ჯილდო',
        'ეროვნული პროგრამის წამყვანი სასწავლო გეგმის შემმუშავებელი'
      ],
      experience: [
        { date: '2015-დღემდე', role: 'უფროსი ლექტორი, თბილისის სახელმწიფო უნივერსიტეტი' },
        { date: '2012-2015', role: 'მოწვეული პროფესორი, ილიას სახელმწიფო უნივერსიტეტი' },
        { date: '2010-2012', role: 'მკვლევარი, ქართული ლიტერატურის ინსტიტუტი' }
      ],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8VV7dlZvxOseZJqh0baBIHNre1tzNjcZpXQ&s",
      portrait: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8VV7dlZvxOseZJqh0baBIHNre1tzNjcZpXQ&s",
      cv: '/cvs/nino-beridze.pdf'
    },
    {
      id: 2,
      slug: 'giorgi-tsiklauri',
      name: 'XY',
      tagline: 'ქართული ენისა და ლიტერატურის რეპეტიტორი, რომელიც სპეციალიზირებულია ინტერაქტიულ სწავლების მეთოდებში',
      bio: `XY აერთიანებს კომპიუტერული მეცნიერების ფონს ქართულ ენის სწავლებისადმი ვნებასთან. მისი ინოვაციური სწავლების მეთოდები ასობით სტუდენტს დაეხმარა კლასიკური და თანამედროვე ქართული ტექსტების ათვისებაში. ის სპეციალიზირებულია რთული ლიტერატურული კონცეფციების ყველასთვის ხელმისაწვდომად გადაცემაში.`,
      achievements: [
        'შექმნა ქართული ენის სასწავლო აპლიკაცია (50,000+ მომხმარებელი)',
        '2022 წლის ციფრული განათლების ინოვატორის ჯილდო',
        'სტუმარი ლექტორი 5 საერთაშორისო კონფერენციაზე'
      ],
      experience: [
        { date: '2018-დღემდე', role: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, rerum!' },
        { date: '2016-2018', role: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, rerum!' },
        { date: '2014-2016', role: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, rerum!' }
      ],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ-3jLxfzm1RxHzXrF_oguAtAD8OcUG6_hKg&s",
      portrait:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ-3jLxfzm1RxHzXrF_oguAtAD8OcUG6_hKg&s",
      cv: '/cvs/giorgi-tsiklauri.pdf'
    },
    {
      id: 3,
      slug: 'ana-mchedlidze',
      name: 'XX',
      tagline: 'ქართული ენისა და ლიტერატურის ექპერტი 15+ წლიანი გამოცდილებით',
      bio: `XY 15 წლიანი გამოცდილებით ასწავლის ქართულ ენას ნებისმიერი ეროვნების მოსწავლეს.მისი ინოვაციური სწავლების მეთოდები ასობით სტუდენტს დაეხმარა კლასიკური და თანამედროვე ქართული ტექსტების ათვისებაში. ის სპეციალიზირებულია რთული ლიტერატურული კონცეფციების ყველასთვის ხელმისაწვდომად გადაცემაში.`,
      achievements: [
        'ფლობს 5 ენას',
        'განავითარა კულტურული განვიტარების პროგრამა',
        'იუნესკოს ენის შენარჩუნების კონსულტანტი'
      ],
      experience: [
        { date: '2017-დღემდე', role: 'დირექტორი, ენისა და კულტურის ცენტრი' },
        { date: '2013-2017', role: 'უფროსი ენის ინსტრუქტორი, მშვიდობის კორპუსი' },
        { date: '2009-2013', role: 'გიდი და კულტურული აღმზრდელი' }
      ],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8VV7dlZvxOseZJqh0baBIHNre1tzNjcZpXQ&s",
      portrait: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8VV7dlZvxOseZJqh0baBIHNre1tzNjcZpXQ&s",
      cv: '/cvs/ana-mchedlidze.pdf'
    }
  ];
  
  export default tutors;
  