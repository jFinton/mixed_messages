// Grabs a random entry from a list given
const grab = arr => { return arr[Math.floor(Math.random() * arr.length )]};

// Noun List
const noun = [ 'Spaceman', 'Juggler', 'sword', 'bike', 'Tow-Truck', 'dragon', 'kitty-cat', 'can',
               'Clown', 'football', 'newspaper', 'television', 'phone', 'Dad', 'Lawyer', 'planet'];
// Place List
const place = [ 'Circus', 'City', 'Village', 'School', 'Court House', 'Shopping Mall', 'Saloon',
                'Space Station', 'Bedroom', 'Kitchen', 'Park', 'Castle', 'Bakery', 'Pet Salon'];
// Verb List
const verb = [ 'running', 'throwing', 'dancing', 'hurling', 'walking', 'fighting', 'programming',
               'aiming', 'baking', 'driving'];
// Adjective List
const adj = ['pretty', 'beautiful', 'hairy', 'disgusting', 'bravest', 'humongous', 'tiny', 'smelly',
             'shiny', 'rusty', 'cute', 'annoying', 'drunken'];

// Story templates
const story = [ `So, like, last night I went to the most ${grab(adj)}, but crazy party. There were many party-goers there like
                 a ${grab(adj)} ${grab(noun)} and a ${grab(verb)} ${grab(noun)}. Also met a very wealthy millionaire whom
                 was immpressed with the way I was ${grab(verb)} through the dance-floor and invited me to their 
                 ${grab(adj)} ${grab(place)}. Still debating on that though, but it was such a crazy night.`,
                 // -------------------------------------------------------------------------------------------
                `Once upon a time, there was a ${grab(noun)} by the name of Sire Galenfri whom was the most ${grab(adj)}
                 in all of the ${grab(place)}. One day, he was tasked with defeating the evil ${grab(noun)} who resided
                 in the ${grab(adj)} ${grab(place)}, and so he traveled along for his quest. Along the way, he met a ${grab(noun)}
                 by the name of Olivander, who agreed to follow him on his quest for he was struck with how Galenfri did his
                 ${grab(verb)}. At last, they finally made it to the lair of the foe, and a terrible and awesome duel took
                 place, but gloriously, Galenfri defeated his foe for he knew their true weakness, a knock on the head by a
                 ${grab(noun)}. Everyone cheered for the new heros has they returned, for they were the most ${grab(adj)}
                 warriors in all the land.`,
                // ---------------------------------------------------------------------------------------------------
                `Welcome folks to the 39th annual National ${grab(noun)} ${grab(verb)} contest! I can assure you, everyone
                 here has been practicing all day and night to train their skills for this day! The first contestent is
                 Miss Caroline, whom has told us that they will show off their ${grab(adj)} skills, and just look at that!
                 Caroline has just reached a score of ${Math.floor(Math.random() * 10)}!! The crowds are going wild!! But
                 off in the side field, is John Jacobson, the local ${grab(noun)} salesman, and it seems he is not impressed!?
                 Is he hiding a secret from us all? It is his time to step on field, and he is eyeing the goal aggressively.
                 ... AND He is off!! Look at that ${grab(adj)} speed! I am sure he can impress any ${grab(noun)} out there
                 in the stands, and the time is up!!! Jacobson is our new champion!! What a way to end the 39th annual games
                 and we will see you all in the ${grab(adj)} 40th annual contest, as the theme will be involving ${grab(noun)}s,
                 at the local ${grab(place)}.`
                ];

// Main Function Loop
const storyIndex = Math.floor(Math.random() * story.length);
console.log(story[storyIndex]);