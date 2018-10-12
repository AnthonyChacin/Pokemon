import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  pokemons = [
    {
      "_id": "557a723880a20c9db3bc31c2",
      "pkdx_id": 1,
      "national_id": 1,
      "name": "Bulbasaur",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/1.png",
      "description": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.  Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/001.png",
      "types": [
        "poison",
        "grass"
      ],
      "evolutions": [
        {
          "level": 16,
          "method": "level_up",
          "to": "Ivysaur",
          "_id": "557a723880a20c9db3bc31c3"
        }
      ]
    },
    {
      "_id": "557a723980a20c9db3bc31e3",
      "pkdx_id": 2,
      "national_id": 2,
      "name": "Ivysaur",
      "__v": 4,
      "image_url": "http://pokeapi.co/media/img/2.png",
      "description": "There is a bud on this Pok�mon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.  There is a bud on this Pok�mon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/002.png",
      "types": [
        "poison",
        "grass"
      ],
      "evolutions": [
        {
          "level": 32,
          "method": "level_up",
          "to": "Venusaur",
          "_id": "557a723980a20c9db3bc31e4"
        }
      ]
    },
    {
      "_id": "557a723880a20c9db3bc31cc",
      "pkdx_id": 3,
      "national_id": 3,
      "name": "Venusaur",
      "__v": 5,
      "image_url": "http://pokeapi.co/media/img/3.png",
      "description": "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.  There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/003.png",
      "types": [
        "poison",
        "grass"
      ],
      "evolutions": [
        {
          "method": "other",
          "to": "Venusaur-mega",
          "_id": "557a723880a20c9db3bc31cd"
        }
      ]
    },
    {
      "_id": "557a723880a20c9db3bc31c8",
      "pkdx_id": 4,
      "national_id": 4,
      "name": "Charmander",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/4.png",
      "description": "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pok�mon becomes enraged, the flame burns fiercely.  The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pok�mon becomes enraged, the flame burns fiercely.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/004.png",
      "types": [
        "fire"
      ],
      "evolutions": [
        {
          "level": 16,
          "method": "level_up",
          "to": "Charmeleon",
          "_id": "557a723880a20c9db3bc31c9"
        }
      ]
    },
    {
      "_id": "557a723980a20c9db3bc31e8",
      "pkdx_id": 5,
      "national_id": 5,
      "name": "Charmeleon",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/5.png",
      "description": "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.  Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/005.png",
      "types": [
        "fire"
      ],
      "evolutions": [
        {
          "level": 36,
          "method": "level_up",
          "to": "Charizard",
          "_id": "557a723980a20c9db3bc31e9"
        }
      ]
    },
    {
      "_id": "557a723880a20c9db3bc31d1",
      "pkdx_id": 6,
      "national_id": 6,
      "name": "Charizard",
      "__v": 4,
      "image_url": "http://pokeapi.co/media/img/6.png",
      "description": "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.  Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/006.png",
      "types": [
        "flying",
        "fire"
      ],
      "evolutions": [
        {
          "method": "other",
          "to": "Charizard-mega-y",
          "_id": "557a723880a20c9db3bc31d3"
        },
        {
          "method": "other",
          "to": "Charizard-mega-x",
          "_id": "557a723880a20c9db3bc31d2"
        }
      ]
    },
    {
      "_id": "557a723980a20c9db3bc31d7",
      "pkdx_id": 7,
      "national_id": 7,
      "name": "Squirtle",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/7.png",
      "description": "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pok�mon to swim at high speeds.  Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pok�mon to swim at high speeds.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/007.png",
      "types": [
        "water"
      ],
      "evolutions": [
        {
          "level": 16,
          "method": "level_up",
          "to": "Wartortle",
          "_id": "557a723980a20c9db3bc31d8"
        }
      ]
    },
    {
      "_id": "557a723980a20c9db3bc31df",
      "pkdx_id": 8,
      "national_id": 8,
      "name": "Wartortle",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/8.png",
      "description": "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pok�mon's toughness as a battler.  Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pok�mon's toughness as a battler.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/008.png",
      "types": [
        "water"
      ],
      "evolutions": [
        {
          "level": 36,
          "method": "level_up",
          "to": "Blastoise",
          "_id": "557a723980a20c9db3bc31e0"
        }
      ]
    },
    {
      "_id": "557a723980a20c9db3bc31db",
      "pkdx_id": 9,
      "national_id": 9,
      "name": "Blastoise",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/9.png",
      "description": "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.  Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/009.png",
      "types": [
        "water"
      ],
      "evolutions": [
        {
          "method": "other",
          "to": "Blastoise-mega",
          "_id": "557a723980a20c9db3bc31dc"
        }
      ]
    },
    {
      "_id": "557a72aa7276d341b41edda6",
      "pkdx_id": 10,
      "national_id": 10,
      "name": "Caterpie",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/10.png",
      "description": "Caterpie has a voracious appetite. It can devour leaves bigger than its body right before your eyes. From its antenna, this Pok�mon releases a terrifically strong odor.  Caterpie has a voracious appetite. It can devour leaves bigger than its body right before your eyes. From its antenna, this Pok�mon releases a terrifically strong odor.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/010.png",
      "types": [
        "bug"
      ],
      "evolutions": [
        {
          "level": 7,
          "method": "level_up",
          "to": "Metapod",
          "_id": "557a72aa7276d341b41edda7"
        }
      ]
    },
    {
      "_id": "557a72ad7276d341b41eddfa",
      "pkdx_id": 11,
      "national_id": 11,
      "name": "Metapod",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/11.png",
      "description": "The shell covering this Pok�mon's body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell.  The shell covering this Pok�mon's body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/011.png",
      "types": [
        "bug"
      ],
      "evolutions": [
        {
          "level": 10,
          "method": "level_up",
          "to": "Butterfree",
          "_id": "557a72ad7276d341b41eddfb"
        }
      ]
    },
    {
      "_id": "557a72aa7276d341b41eddbf",
      "pkdx_id": 12,
      "national_id": 12,
      "name": "Butterfree",
      "__v": 4,
      "image_url": "http://pokeapi.co/media/img/12.png",
      "description": "Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest.  Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/012.png",
      "types": [
        "flying",
        "bug"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72a97276d341b41edd99",
      "pkdx_id": 13,
      "national_id": 13,
      "name": "Weedle",
      "__v": 4,
      "image_url": "http://pokeapi.co/media/img/13.png",
      "description": "Weedle has an extremely acute sense of smell. It is capable of distinguishing its favorite kinds of leaves from those it dislikes just by sniffing with its big red proboscis (nose).  Weedle has an extremely acute sense of smell. It is capable of distinguishing its favorite kinds of leaves from those it dislikes just by sniffing with its big red proboscis (nose).",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/013.png",
      "types": [
        "poison",
        "bug"
      ],
      "evolutions": [
        {
          "level": 7,
          "method": "level_up",
          "to": "Kakuna",
          "_id": "557a72a97276d341b41edd9a"
        }
      ]
    },
    {
      "_id": "557a72ac7276d341b41edde8",
      "pkdx_id": 14,
      "national_id": 14,
      "name": "Kakuna",
      "__v": 4,
      "image_url": "http://pokeapi.co/media/img/14.png",
      "description": "Kakuna remains virtually immobile as it clings to a tree. However, on the inside, it is extremely busy as it prepares for its coming evolution. This is evident from how hot the shell becomes to the touch.  Kakuna remains virtually immobile as it clings to a tree. However, on the inside, it is extremely busy as it prepares for its coming evolution. This is evident from how hot the shell becomes to the touch.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/014.png",
      "types": [
        "poison",
        "bug"
      ],
      "evolutions": [
        {
          "level": 10,
          "method": "level_up",
          "to": "Beedrill",
          "_id": "557a72ac7276d341b41edde9"
        }
      ]
    },
    {
      "_id": "557a72a97276d341b41edd9e",
      "pkdx_id": 15,
      "national_id": 15,
      "name": "Beedrill",
      "__v": 4,
      "image_url": "http://pokeapi.co/media/img/15.png",
      "description": "Beedrill is extremely territorial. No one should ever approach its nest�this is for their own safety. If angered, they will attack in a furious swarm.  Beedrill is extremely territorial. No one should ever approach its nest�this is for their own safety. If angered, they will attack in a furious swarm.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/015.png",
      "types": [
        "poison",
        "bug"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72a97276d341b41edd91",
      "pkdx_id": 16,
      "national_id": 16,
      "name": "Pidgey",
      "__v": 4,
      "image_url": "http://pokeapi.co/media/img/16.png",
      "description": "Pidgey has an extremely sharp sense of direction. It is capable of unerringly returning home to its nest, however far it may be removed from its familiar surroundings.  Pidgey has an extremely sharp sense of direction. It is capable of unerringly returning home to its nest, however far it may be removed from its familiar surroundings.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/016.png",
      "types": [
        "normal",
        "flying"
      ],
      "evolutions": [
        {
          "level": 18,
          "method": "level_up",
          "to": "Pidgeotto",
          "_id": "557a72a97276d341b41edd92"
        }
      ]
    },
    {
      "_id": "557a72ac7276d341b41edded",
      "pkdx_id": 17,
      "national_id": 17,
      "name": "Pidgeotto",
      "__v": 4,
      "image_url": "http://pokeapi.co/media/img/17.png",
      "description": "Pidgeotto claims a large area as its own territory. This Pok�mon flies around, patrolling its living space. If its territory is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws.  Pidgeotto claims a large area as its own territory. This Pok�mon flies around, patrolling its living space. If its territory is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/017.png",
      "types": [
        "normal",
        "flying"
      ],
      "evolutions": [
        {
          "level": 36,
          "method": "level_up",
          "to": "Pidgeot",
          "_id": "557a72ac7276d341b41eddee"
        }
      ]
    },
    {
      "_id": "557a72aa7276d341b41eddaa",
      "pkdx_id": 18,
      "national_id": 18,
      "name": "Pidgeot",
      "__v": 4,
      "image_url": "http://pokeapi.co/media/img/18.png",
      "description": "This Pok�mon has a dazzling plumage of beautifully glossy feathers. Many Trainers are captivated by the striking beauty of the feathers on its head, compelling them to choose Pidgeot as their Pok�mon.  This Pok�mon has a dazzling plumage of beautifully glossy feathers. Many Trainers are captivated by the striking beauty of the feathers on its head, compelling them to choose Pidgeot as their Pok�mon.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/018.png",
      "types": [
        "normal",
        "flying"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72ab7276d341b41eddc9",
      "pkdx_id": 19,
      "national_id": 19,
      "name": "Rattata",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/19.png",
      "description": "Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives�it will make its nest anywhere.  Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives�it will make its nest anywhere.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/019.png",
      "types": [
        "normal"
      ],
      "evolutions": [
        {
          "level": 20,
          "method": "level_up",
          "to": "Raticate",
          "_id": "557a72ab7276d341b41eddca"
        }
      ]
    },
    {
      "_id": "557a72a97276d341b41edd96",
      "pkdx_id": 20,
      "national_id": 20,
      "name": "Raticate",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/20.png",
      "description": "Raticate's sturdy fangs grow steadily. To keep them ground down, it gnaws on rocks and logs. It may even chew on the walls of houses.  Raticate's sturdy fangs grow steadily. To keep them ground down, it gnaws on rocks and logs. It may even chew on the walls of houses.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/020.png",
      "types": [
        "normal"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72aa7276d341b41eddba",
      "pkdx_id": 21,
      "national_id": 21,
      "name": "Spearow",
      "__v": 5,
      "image_url": "http://pokeapi.co/media/img/21.png",
      "description": "Spearow has a very loud cry that can be heard over half a mile away. If its high, keening cry is heard echoing all around, it is a sign that they are warning each other of danger.  Spearow has a very loud cry that can be heard over half a mile away. If its high, keening cry is heard echoing all around, it is a sign that they are warning each other of danger.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/021.png",
      "types": [
        "normal",
        "flying"
      ],
      "evolutions": [
        {
          "level": 20,
          "method": "level_up",
          "to": "Fearow",
          "_id": "557a72aa7276d341b41eddbb"
        }
      ]
    },
    {
      "_id": "557a72aa7276d341b41eddae",
      "pkdx_id": 22,
      "national_id": 22,
      "name": "Fearow",
      "__v": 4,
      "image_url": "http://pokeapi.co/media/img/22.png",
      "description": "Fearow is recognized by its long neck and elongated beak. They are conveniently shaped for catching prey in soil or water. It deftly moves its long and skinny beak to pluck prey.  Fearow is recognized by its long neck and elongated beak. They are conveniently shaped for catching prey in soil or water. It deftly moves its long and skinny beak to pluck prey.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/022.png",
      "types": [
        "normal",
        "flying"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72aa7276d341b41eddb6",
      "pkdx_id": 23,
      "national_id": 23,
      "name": "Ekans",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/23.png",
      "description": "Ekans curls itself up in a spiral while it rests. Assuming this position allows it to quickly respond to a threat from any direction with a glare from its upraised head.  Ekans curls itself up in a spiral while it rests. Assuming this position allows it to quickly respond to a threat from any direction with a glare from its upraised head.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/023.png",
      "types": [
        "poison"
      ],
      "evolutions": [
        {
          "level": 22,
          "method": "level_up",
          "to": "Arbok",
          "_id": "557a72aa7276d341b41eddb7"
        }
      ]
    },
    {
      "_id": "557a72ac7276d341b41edddc",
      "pkdx_id": 24,
      "national_id": 24,
      "name": "Arbok",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/24.png",
      "description": "This Pok�mon is terrifically strong in order to constrict things with its body. It can even flatten steel oil drums. Once Arbok wraps its body around its foe, escaping its crunching embrace is impossible.  This Pok�mon is terrifically strong in order to constrict things with its body. It can even flatten steel oil drums. Once Arbok wraps its body around its foe, escaping its crunching embrace is impossible.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/024.png",
      "types": [
        "poison"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72a97276d341b41edda2",
      "pkdx_id": 25,
      "national_id": 25,
      "name": "Pikachu",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/25.png",
      "description": "This Pok�mon has electricity-storing pouches on its cheeks. These appear to become electrically charged during the night while Pikachu sleeps. It occasionally discharges electricity when it is dozy after waking up.  Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pok�mon mistook the intensity of its charge.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/025.png",
      "types": [
        "electric"
      ],
      "evolutions": [
        {
          "method": "stone",
          "to": "Raichu",
          "_id": "557a72a97276d341b41edda3"
        }
      ]
    },
    {
      "_id": "557a72ab7276d341b41eddc6",
      "pkdx_id": 26,
      "national_id": 26,
      "name": "Raichu",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/26.png",
      "description": "This Pok�mon exudes a weak electrical charge from all over its body that makes it take on a slight glow in darkness. Raichu plants its tail in the ground to discharge electricity.  If the electrical sacs become excessively charged, Raichu plants its tail in the ground and discharges. Scorched patches of ground will be found near this Pok�mon's nest.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/026.png",
      "types": [
        "electric"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72ac7276d341b41eddf2",
      "pkdx_id": 27,
      "national_id": 27,
      "name": "Sandshrew",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/27.png",
      "description": "Sandshrew has a very dry hide that is extremely tough. The Pok�mon can roll into a ball that repels any attack. At night, it burrows into the desert sand to sleep.  Sandshrew's body is configured to absorb water without waste, enabling it to survive in an arid desert. This Pok�mon curls up to protect itself from its enemies.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/027.png",
      "types": [
        "ground"
      ],
      "evolutions": [
        {
          "level": 22,
          "method": "level_up",
          "to": "Sandslash",
          "_id": "557a72ac7276d341b41eddf3"
        }
      ]
    },
    {
      "_id": "557a72ac7276d341b41edde5",
      "pkdx_id": 28,
      "national_id": 28,
      "name": "Sandslash",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/28.png",
      "description": "Sandslash can roll up its body as if it were a ball covered with large spikes. In battle, this Pok�mon will try to make the foe flinch by jabbing it with its spines. It then leaps at the stunned foe to tear wildly with its sharp claws.  Sandslash's body is covered by tough spikes, which are hardened sections of its hide. Once a year, the old spikes fall out, to be replaced with new spikes that grow out from beneath the old ones.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/028.png",
      "types": [
        "ground"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72ac7276d341b41eddd8",
      "pkdx_id": 29,
      "national_id": 29,
      "name": "Nidoran-f",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/29.png",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/029.png",
      "description": "Nidoran has barbs that secrete a powerful poison. They are thought to have developed as protection for this small-bodied Pok�mon. When enraged, it releases a horrible toxin from its horn.",
      "types": [
        "poison"
      ],
      "evolutions": [
        {
          "level": 16,
          "method": "level_up",
          "to": "Nidorina",
          "_id": "557a72ac7276d341b41eddd9"
        }
      ]
    },
    {
      "_id": "557a72d07276d341b41ee1f0",
      "pkdx_id": 30,
      "national_id": 30,
      "name": "Nidorina",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/30.png",
      "description": "When Nidorina are with their friends or family, they keep their barbs tucked away to prevent hurting each other. This Pok�mon appears to become nervous if separated from the others.  When Nidorina are with their friends or family, they keep their barbs tucked away to prevent hurting each other. This Pok�mon appears to become nervous if separated from the others.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/030.png",
      "types": [
        "poison"
      ],
      "evolutions": [
        {
          "method": "stone",
          "to": "Nidoqueen",
          "_id": "557a72d07276d341b41ee1f1"
        }
      ]
    },
    {
      "_id": "557a72aa7276d341b41eddb2",
      "pkdx_id": 31,
      "national_id": 31,
      "name": "Nidoqueen",
      "__v": 4,
      "image_url": "http://pokeapi.co/media/img/31.png",
      "description": "Nidoqueen's body is encased in extremely hard scales. It is adept at sending foes flying with harsh tackles. This Pok�mon is at its strongest when it is defending its young.  Nidoqueen's body is encased in extremely hard scales. It is adept at sending foes flying with harsh tackles. This Pok�mon is at its strongest when it is defending its young.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/031.png",
      "types": [
        "poison",
        "ground"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72ad7276d341b41eddfe",
      "pkdx_id": 32,
      "national_id": 32,
      "name": "Nidoran-m",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/32.png",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/032.png",
      "description": "Nidoran has developed muscles for moving its ears. Thanks to them, the ears can be freely moved in any direction. Even the slightest sound does not escape this Pok�mon's notice.",
      "types": [
        "poison"
      ],
      "evolutions": [
        {
          "level": 16,
          "method": "level_up",
          "to": "Nidorino",
          "_id": "557a72ad7276d341b41eddff"
        }
      ]
    },
    {
      "_id": "557a72ad7276d341b41ede12",
      "pkdx_id": 33,
      "national_id": 33,
      "name": "Nidorino",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/33.png",
      "description": "Nidorino has a horn that is harder than a diamond. If it senses a hostile presence, all the barbs on its back bristle up at once, and it challenges the foe with all its might.  Nidorino has a horn that is harder than a diamond. If it senses a hostile presence, all the barbs on its back bristle up at once, and it challenges the foe with all its might.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/033.png",
      "types": [
        "poison"
      ],
      "evolutions": [
        {
          "method": "stone",
          "to": "Nidoking",
          "_id": "557a72ad7276d341b41ede13"
        }
      ]
    },
    {
      "_id": "557a72ab7276d341b41eddcd",
      "pkdx_id": 34,
      "national_id": 34,
      "name": "Nidoking",
      "__v": 4,
      "image_url": "http://pokeapi.co/media/img/34.png",
      "description": "Nidoking's thick tail packs enormously destructive power. With one swing, it can topple a metal transmission tower. Once this Pok�mon goes on a rampage, there is no stopping it.  Nidoking's thick tail packs enormously destructive power. With one swing, it can topple a metal transmission tower. Once this Pok�mon goes on a rampage, there is no stopping it.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/034.png",
      "types": [
        "poison",
        "ground"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72ab7276d341b41eddd4",
      "pkdx_id": 35,
      "national_id": 35,
      "name": "Clefairy",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/35.png",
      "description": "On every night of a full moon, groups of this Pok�mon come out to play. When dawn arrives, the tired Clefairy return to their quiet mountain retreats and go to sleep nestled up against each other.  On every night of a full moon, groups of this Pok�mon come out to play. When dawn arrives, the tired Clefairy return to their quiet mountain retreats and go to sleep nestled up against each other.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/035.png",
      "types": [
        "fairy"
      ],
      "evolutions": [
        {
          "method": "stone",
          "to": "Clefable",
          "_id": "557a72ab7276d341b41eddd5"
        }
      ]
    },
    {
      "_id": "557a72ab7276d341b41eddd1",
      "pkdx_id": 36,
      "national_id": 36,
      "name": "Clefable",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/36.png",
      "description": "Clefable moves by skipping lightly as if it were flying using its wings. Its bouncy step lets it even walk on water. It is known to take strolls on lakes on quiet, moonlit nights.  Clefable moves by skipping lightly as if it were flying using its wings. Its bouncy step lets it even walk on water. It is known to take strolls on lakes on quiet, moonlit nights.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/036.png",
      "types": [
        "fairy"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72ae7276d341b41ede2d",
      "pkdx_id": 37,
      "national_id": 37,
      "name": "Vulpix",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/37.png",
      "description": "Inside Vulpix's body burns a flame that never goes out. During the daytime, when the temperatures rise, this Pok�mon releases flames from its mouth to prevent its body from growing too hot.  At the time of its birth, Vulpix has one white tail. The tail separates into six if this Pok�mon receives plenty of love from its Trainer. The six tails become magnificently curled.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/037.png",
      "types": [
        "fire"
      ],
      "evolutions": [
        {
          "method": "stone",
          "to": "Ninetales",
          "_id": "557a72ae7276d341b41ede2e"
        }
      ]
    },
    {
      "_id": "557a72ab7276d341b41eddc3",
      "pkdx_id": 38,
      "national_id": 38,
      "name": "Ninetales",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/38.png",
      "description": "Legend has it that Ninetales came into being when nine wizards possessing sacred powers merged into one. This Pok�mon is highly intelligent�it can understand human speech.  Ninetales casts a sinister light from its bright red eyes to gain total control over its foe's mind. This Pok�mon is said to live for a thousand years.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/038.png",
      "types": [
        "fire"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72b07276d341b41ede4b",
      "pkdx_id": 39,
      "national_id": 39,
      "name": "Jigglypuff",
      "__v": 4,
      "image_url": "http://pokeapi.co/media/img/39.png",
      "description": "When this Pok�mon sings, it never pauses to breathe. If it is in a battle against an opponent that does not easily fall asleep, Jigglypuff cannot breathe, endangering its life.  Jigglypuff's vocal cords can freely adjust the wavelength of its voice. This Pok�mon uses this ability to sing at precisely the right wavelength to make its foes most drowsy.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/039.png",
      "types": [
        "normal",
        "fairy"
      ],
      "evolutions": [
        {
          "method": "stone",
          "to": "Wigglytuff",
          "_id": "557a72b07276d341b41ede4c"
        }
      ]
    },
    {
      "_id": "557a72ac7276d341b41eddf6",
      "pkdx_id": 40,
      "national_id": 40,
      "name": "Wigglytuff",
      "__v": 4,
      "image_url": "http://pokeapi.co/media/img/40.png",
      "description": "Wigglytuff's body is very flexible. By inhaling deeply, this Pok�mon can inflate itself seemingly without end. Once inflated, Wigglytuff bounces along lightly like a balloon.  Wigglytuff has large, saucerlike eyes. The surfaces of its eyes are always covered with a thin layer of tears. If any dust gets in this Pok�mon's eyes, it is quickly washed away.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/040.png",
      "types": [
        "normal",
        "fairy"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72b27276d341b41ede82",
      "pkdx_id": 41,
      "national_id": 41,
      "name": "Zubat",
      "__v": 4,
      "image_url": "http://pokeapi.co/media/img/41.png",
      "description": "Zubat avoids sunlight because exposure causes it to become unhealthy. During the daytime, it stays in caves or under the eaves of old houses, sleeping while hanging upside down.  Zubat remains quietly unmoving in a dark spot during the bright daylight hours. It does so because prolonged exposure to the sun causes its body to become slightly burned.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/041.png",
      "types": [
        "flying",
        "poison"
      ],
      "evolutions": [
        {
          "level": 22,
          "method": "level_up",
          "to": "Golbat",
          "_id": "557a72b27276d341b41ede83"
        }
      ]
    },
    {
      "_id": "557a72ae7276d341b41ede28",
      "pkdx_id": 42,
      "national_id": 42,
      "name": "Golbat",
      "__v": 5,
      "image_url": "http://pokeapi.co/media/img/42.png",
      "description": "Golbat bites down on prey with its four fangs and drinks the victim's blood. It becomes active on inky dark moonless nights, flying around to attack people and Pok�mon.  Golbat loves to drink the blood of living things. It is particularly active in the pitch black of night. This Pok�mon flits around in the night skies, seeking fresh blood.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/042.png",
      "types": [
        "flying",
        "poison"
      ],
      "evolutions": [
        {
          "method": "other",
          "to": "Crobat",
          "_id": "557a72ae7276d341b41ede29"
        }
      ]
    },
    {
      "_id": "557a72ad7276d341b41ede16",
      "pkdx_id": 43,
      "national_id": 43,
      "name": "Oddish",
      "__v": 5,
      "image_url": "http://pokeapi.co/media/img/43.png",
      "description": "Oddish searches for fertile, nutrient-rich soil, then plants itself. During the daytime, while it is planted, this Pok�mon's feet are thought to change shape and become similar to the roots of trees.  During the daytime, Oddish buries itself in soil to absorb nutrients from the ground using its entire body. The more fertile the soil, the glossier its leaves become.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/043.png",
      "types": [
        "poison",
        "grass"
      ],
      "evolutions": [
        {
          "level": 21,
          "method": "level_up",
          "to": "Gloom",
          "_id": "557a72ad7276d341b41ede17"
        }
      ]
    },
    {
      "_id": "557a72ac7276d341b41edddf",
      "pkdx_id": 44,
      "national_id": 44,
      "name": "Gloom",
      "__v": 4,
      "image_url": "http://pokeapi.co/media/img/44.png",
      "description": "From its mouth Gloom drips honey that smells absolutely horrible. Apparently, it loves the horrid stench. It sniffs the noxious fumes and then drools even more of its honey.  Gloom releases a foul fragrance from the pistil of its flower. When faced with danger, the stench worsens. If this Pok�mon is feeling calm and secure, it does not release its usual stinky aroma.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/044.png",
      "types": [
        "poison",
        "grass"
      ],
      "evolutions": [
        {
          "method": "stone",
          "to": "Bellossom",
          "_id": "557a72ac7276d341b41edde1"
        },
        {
          "method": "stone",
          "to": "Vileplume",
          "_id": "557a72ac7276d341b41edde0"
        }
      ]
    },
    {
      "_id": "557a72ad7276d341b41ede02",
      "pkdx_id": 45,
      "national_id": 45,
      "name": "Vileplume",
      "__v": 4,
      "image_url": "http://pokeapi.co/media/img/45.png",
      "description": "Vileplume has the world's largest petals. They are used to attract prey that are then doused with toxic spores. Once the prey are immobilized, this Pok�mon catches and devours them.  Vileplume's toxic pollen triggers atrocious allergy attacks. That's why it is advisable never to approach any attractive flowers in a jungle, however pretty they may be.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/045.png",
      "types": [
        "poison",
        "grass"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72ae7276d341b41ede23",
      "pkdx_id": 46,
      "national_id": 46,
      "name": "Paras",
      "__v": 4,
      "image_url": "http://pokeapi.co/media/img/46.png",
      "description": "Paras has parasitic mushrooms growing on its back called tochukaso. They grow large by drawing nutrients from this Bug Pok�mon host. They are highly valued as a medicine for extending life.  Paras has parasitic mushrooms growing on its back called tochukaso. They grow large by drawing nutrients from this Bug Pok�mon host. They are highly valued as a medicine for extending life.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/046.png",
      "types": [
        "bug",
        "grass"
      ],
      "evolutions": [
        {
          "level": 24,
          "method": "level_up",
          "to": "Parasect",
          "_id": "557a72ae7276d341b41ede24"
        }
      ]
    },
    {
      "_id": "557a72af7276d341b41ede44",
      "pkdx_id": 47,
      "national_id": 47,
      "name": "Parasect",
      "__v": 5,
      "image_url": "http://pokeapi.co/media/img/47.png",
      "description": "Parasect is known to infest large trees en masse and drain nutrients from the lower trunk and roots. When an infested tree dies, they move onto another tree all at once.  Parasect is known to infest large trees en masse and drain nutrients from the lower trunk and roots. When an infested tree dies, they move onto another tree all at once.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/047.png",
      "types": [
        "bug",
        "grass"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72ad7276d341b41ede06",
      "pkdx_id": 48,
      "national_id": 48,
      "name": "Venonat",
      "__v": 5,
      "image_url": "http://pokeapi.co/media/img/48.png",
      "description": "Venonat is said to have evolved with a coat of thin, stiff hair that covers its entire body for protection. It possesses large eyes that never fail to spot even minuscule prey.  Venonat is said to have evolved with a coat of thin, stiff hair that covers its entire body for protection. It possesses large eyes that never fail to spot even minuscule prey.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/048.png",
      "types": [
        "poison",
        "bug"
      ],
      "evolutions": [
        {
          "level": 31,
          "method": "level_up",
          "to": "Venomoth",
          "_id": "557a72ad7276d341b41ede07"
        }
      ]
    },
    {
      "_id": "557a72b07276d341b41ede5b",
      "pkdx_id": 49,
      "national_id": 49,
      "name": "Venomoth",
      "__v": 4,
      "image_url": "http://pokeapi.co/media/img/49.png",
      "description": "Venomoth is nocturnal�it is a Pok�mon that only becomes active at night. Its favorite prey are small insects that gather around streetlights, attracted by the light in the darkness.  Venomoth is nocturnal�it is a Pok�mon that only becomes active at night. Its favorite prey are small insects that gather around streetlights, attracted by the light in the darkness.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/049.png",
      "types": [
        "poison",
        "bug"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72ad7276d341b41ede0e",
      "pkdx_id": 50,
      "national_id": 50,
      "name": "Diglett",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/50.png",
      "description": "Diglett are raised in most farms. The reason is simple� wherever this Pok�mon burrows, the soil is left perfectly tilled for planting crops. This soil is made ideal for growing delicious vegetables.  Diglett are raised in most farms. The reason is simple� wherever this Pok�mon burrows, the soil is left perfectly tilled for planting crops. This soil is made ideal for growing delicious vegetables.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/050.png",
      "types": [
        "ground"
      ],
      "evolutions": [
        {
          "level": 26,
          "method": "level_up",
          "to": "Dugtrio",
          "_id": "557a72ad7276d341b41ede0f"
        }
      ]
    },
    {
      "_id": "557a72af7276d341b41ede48",
      "pkdx_id": 51,
      "national_id": 51,
      "name": "Dugtrio",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/51.png",
      "description": "Dugtrio are actually triplets that emerged from one body. As a result, each triplet thinks exactly like the other two triplets. They work cooperatively to burrow endlessly.  Dugtrio are actually triplets that emerged from one body. As a result, each triplet thinks exactly like the other two triplets. They work cooperatively to burrow endlessly.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/051.png",
      "types": [
        "ground"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72ae7276d341b41ede31",
      "pkdx_id": 52,
      "national_id": 52,
      "name": "Meowth",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/52.png",
      "description": "Meowth withdraws its sharp claws into its paws to slinkily sneak about without making any incriminating footsteps. For some reason, this Pok�mon loves shiny coins that glitter with light.  Meowth withdraws its sharp claws into its paws to slinkily sneak about without making any incriminating footsteps. For some reason, this Pok�mon loves shiny coins that glitter with light.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/052.png",
      "types": [
        "normal"
      ],
      "evolutions": [
        {
          "level": 28,
          "method": "level_up",
          "to": "Persian",
          "_id": "557a72ae7276d341b41ede32"
        }
      ]
    },
    {
      "_id": "557a72b07276d341b41ede5f",
      "pkdx_id": 53,
      "national_id": 53,
      "name": "Persian",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/53.png",
      "description": "Persian has six bold whiskers that give it a look of toughness. The whiskers sense air movements to determine what is in the Pok�mon's surrounding vicinity. It becomes docile if grabbed by the whiskers.  Persian has six bold whiskers that give it a look of toughness. The whiskers sense air movements to determine what is in the Pok�mon's surrounding vicinity. It becomes docile if grabbed by the whiskers.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/053.png",
      "types": [
        "normal"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72b07276d341b41ede57",
      "pkdx_id": 54,
      "national_id": 54,
      "name": "Psyduck",
      "__v": 5,
      "image_url": "http://pokeapi.co/media/img/54.png",
      "description": "If it uses its mysterious power, Psyduck can't remember having done so. It apparently can't form a memory of such an event because it goes into an altered state that is much like deep sleep.  Psyduck uses a mysterious power. When it does so, this Pok�mon generates brain waves that are supposedly only seen in sleepers. This discovery spurred controversy among scholars.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/054.png",
      "types": [
        "water"
      ],
      "evolutions": [
        {
          "level": 33,
          "method": "level_up",
          "to": "Golduck",
          "_id": "557a72b07276d341b41ede58"
        }
      ]
    },
    {
      "_id": "557a72ad7276d341b41ede0b",
      "pkdx_id": 55,
      "national_id": 55,
      "name": "Golduck",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/55.png",
      "description": "Golduck is the fastest swimmer among all Pok�mon. It swims effortlessly, even in a rough, stormy sea. It sometimes rescues people from wrecked ships floundering in high seas.  The webbed flippers on its forelegs and hind legs and the streamlined body of Golduck give it frightening speed. This Pok�mon is definitely much faster than even the most athletic swimmer.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/055.png",
      "types": [
        "water"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72d17276d341b41ee20a",
      "pkdx_id": 56,
      "national_id": 56,
      "name": "Mankey",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/56.png",
      "description": "When Mankey starts shaking and its nasal breathing turns rough, it's a sure sign that it is becoming angry. However, because it goes into a towering rage almost instantly, it is impossible for anyone to flee its wrath.  When Mankey starts shaking and its nasal breathing turns rough, it's a sure sign that it is becoming angry. However, because it goes into a towering rage almost instantly, it is impossible for anyone to flee its wrath.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/056.png",
      "types": [
        "fighting"
      ],
      "evolutions": [
        {
          "level": 28,
          "method": "level_up",
          "to": "Primeape",
          "_id": "557a72d17276d341b41ee20b"
        }
      ]
    },
    {
      "_id": "557a72af7276d341b41ede3d",
      "pkdx_id": 57,
      "national_id": 57,
      "name": "Primeape",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/57.png",
      "description": "When Primeape becomes furious, its blood circulation is boosted. In turn, its muscles are made even stronger. However, it also becomes much less intelligent at the same time.  When Primeape becomes furious, its blood circulation is boosted. In turn, its muscles are made even stronger. However, it also becomes much less intelligent at the same time.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/057.png",
      "types": [
        "fighting"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72ae7276d341b41ede1b",
      "pkdx_id": 58,
      "national_id": 58,
      "name": "Growlithe",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/58.png",
      "description": "Growlithe has a superb sense of smell. Once it smells anything, this Pok�mon won't forget the scent, no matter what. It uses its advanced olfactory sense to determine the emotions of other living things.  Growlithe has a superb sense of smell. Once it smells anything, this Pok�mon won't forget the scent, no matter what. It uses its advanced olfactory sense to determine the emotions of other living things.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/058.png",
      "types": [
        "fire"
      ],
      "evolutions": [
        {
          "method": "stone",
          "to": "Arcanine",
          "_id": "557a72ae7276d341b41ede1c"
        }
      ]
    },
    {
      "_id": "557a72af7276d341b41ede3a",
      "pkdx_id": 59,
      "national_id": 59,
      "name": "Arcanine",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/59.png",
      "description": "Arcanine is known for its high speed. It is said to be capable of running over 6,200 miles in a single day and night. The fire that blazes wildly within this Pok�mon's body is its source of power.  Arcanine is known for its high speed. It is said to be capable of running over 6,200 miles in a single day and night. The fire that blazes wildly within this Pok�mon's body is its source of power.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/059.png",
      "types": [
        "fire"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72ae7276d341b41ede1f",
      "pkdx_id": 60,
      "national_id": 60,
      "name": "Poliwag",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/60.png",
      "description": "Poliwag has a very thin skin. It is possible to see the Pok�mon's spiral innards right through the skin. Despite its thinness, however, the skin is also very flexible. Even sharp fangs bounce right off it.  Poliwag has a very thin skin. It is possible to see the Pok�mon's spiral innards right through the skin. Despite its thinness, however, the skin is also very flexible. Even sharp fangs bounce right off it.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/060.png",
      "types": [
        "water"
      ],
      "evolutions": [
        {
          "level": 25,
          "method": "level_up",
          "to": "Poliwhirl",
          "_id": "557a72ae7276d341b41ede20"
        }
      ]
    },
    {
      "_id": "557a72af7276d341b41ede35",
      "pkdx_id": 61,
      "national_id": 61,
      "name": "Poliwhirl",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/61.png",
      "description": "The surface of Poliwhirl's body is always wet and slick with a slimy fluid. Because of this slippery covering, it can easily slip and slide out of the clutches of any enemy in battle.  The surface of Poliwhirl's body is always wet and slick with a slimy fluid. Because of this slippery covering, it can easily slip and slide out of the clutches of any enemy in battle.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/061.png",
      "types": [
        "water"
      ],
      "evolutions": [
        {
          "method": "trade",
          "to": "Politoed",
          "_id": "557a72af7276d341b41ede37"
        },
        {
          "method": "stone",
          "to": "Poliwrath",
          "_id": "557a72af7276d341b41ede36"
        }
      ]
    },
    {
      "_id": "557a72d17276d341b41ee201",
      "pkdx_id": 62,
      "national_id": 62,
      "name": "Poliwrath",
      "__v": 4,
      "image_url": "http://pokeapi.co/media/img/62.png",
      "description": "Poliwrath's highly developed, brawny muscles never grow fatigued, however much it exercises. It is so tirelessly strong, this Pok�mon can swim back and forth across the ocean without effort.  Poliwrath's highly developed, brawny muscles never grow fatigued, however much it exercises. It is so tirelessly strong, this Pok�mon can swim back and forth across the ocean without effort.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/062.png",
      "types": [
        "fighting",
        "water"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72d17276d341b41ee212",
      "pkdx_id": 63,
      "national_id": 63,
      "name": "Abra",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/63.png",
      "description": "Abra needs to sleep for eighteen hours a day. If it doesn't, this Pok�mon loses its ability to use telekinetic powers. If it is attacked, Abra escapes using Teleport while it is still sleeping.  Abra sleeps for eighteen hours a day. However, it can sense the presence of foes even while it is sleeping. In such a situation, this Pok�mon immediately teleports to safety.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/063.png",
      "types": [
        "psychic"
      ],
      "evolutions": [
        {
          "level": 16,
          "method": "level_up",
          "to": "Kadabra",
          "_id": "557a72d17276d341b41ee213"
        }
      ]
    },
    {
      "_id": "557a72cf7276d341b41ee1bf",
      "pkdx_id": 64,
      "national_id": 64,
      "name": "Kadabra",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/64.png",
      "description": "Kadabra holds a silver spoon in its hand. The spoon is used to amplify the alpha waves in its brain. Without the spoon, the Pok�mon is said to be limited to half the usual amount of its telekinetic powers.  Kadabra emits a peculiar alpha wave if it develops a headache. Only those people with a particularly strong psyche can hope to become a Trainer of this Pok�mon.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/064.png",
      "types": [
        "psychic"
      ],
      "evolutions": [
        {
          "method": "trade",
          "to": "Alakazam",
          "_id": "557a72cf7276d341b41ee1c0"
        }
      ]
    },
    {
      "_id": "557a72d07276d341b41ee1de",
      "pkdx_id": 65,
      "national_id": 65,
      "name": "Alakazam",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/65.png",
      "description": "Alakazam's brain continually grows, infinitely multiplying brain cells. This amazing brain gives this Pok�mon an astoundingly high IQ of 5,000. It has a thorough memory of everything that has occurred in the world.  Alakazam's brain continually grows, making its head far too heavy to support with its neck. This Pok�mon holds its head up using its psychokinetic power instead.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/065.png",
      "types": [
        "psychic"
      ],
      "evolutions": [
        {
          "method": "other",
          "to": "Alakazam-mega",
          "_id": "557a72d07276d341b41ee1df"
        }
      ]
    },
    {
      "_id": "557a72d07276d341b41ee1f9",
      "pkdx_id": 66,
      "national_id": 66,
      "name": "Machop",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/66.png",
      "description": "Machop exercises by hefting around a Graveler as if it were a barbell. There are some Machop that travel the world in a quest to master all kinds of martial arts.  Machop's muscles are special�they never get sore no matter how much they are used in exercise. This Pok�mon has sufficient power to hurl a hundred adult humans.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/066.png",
      "types": [
        "fighting"
      ],
      "evolutions": [
        {
          "level": 28,
          "method": "level_up",
          "to": "Machoke",
          "_id": "557a72d07276d341b41ee1fa"
        }
      ]
    },
    {
      "_id": "557a72b07276d341b41ede50",
      "pkdx_id": 67,
      "national_id": 67,
      "name": "Machoke",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/67.png",
      "description": "Machoke undertakes bodybuilding every day even as it helps people with tough, physically demanding labor. On its days off, this Pok�mon heads to the fields and mountains to exercise and train.  Machoke's thoroughly toned muscles possess the hardness of steel. This Pok�mon has so much strength, it can easily hold aloft a sumo wrestler on just one finger.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/067.png",
      "types": [
        "fighting"
      ],
      "evolutions": [
        {
          "method": "trade",
          "to": "Machamp",
          "_id": "557a72b07276d341b41ede51"
        }
      ]
    },
    {
      "_id": "557a72b07276d341b41ede54",
      "pkdx_id": 68,
      "national_id": 68,
      "name": "Machamp",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/68.png",
      "description": "Machamp is known as the Pok�mon that has mastered every kind of martial arts. If it grabs hold of the foe with its four arms, the battle is all but over. The hapless foe is thrown far over the horizon.  Machamp has the power to hurl anything aside. However, trying to do any work requiring care and dexterity causes its arms to get tangled. This Pok�mon tends to leap into action before it thinks.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/068.png",
      "types": [
        "fighting"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72d07276d341b41ee1f4",
      "pkdx_id": 69,
      "national_id": 69,
      "name": "Bellsprout",
      "__v": 4,
      "image_url": "http://pokeapi.co/media/img/69.png",
      "description": "Bellsprout's thin and flexible body lets it bend and sway to avoid any attack, however strong it may be. From its mouth, this Pok�mon spits a corrosive fluid that melts even iron.  Bellsprout's thin and flexible body lets it bend and sway to avoid any attack, however strong it may be. From its mouth, this Pok�mon spits a corrosive fluid that melts even iron.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/069.png",
      "types": [
        "poison",
        "grass"
      ],
      "evolutions": [
        {
          "level": 21,
          "method": "level_up",
          "to": "Weepinbell",
          "_id": "557a72d07276d341b41ee1f5"
        }
      ]
    },
    {
      "_id": "557a72cf7276d341b41ee1d4",
      "pkdx_id": 70,
      "national_id": 70,
      "name": "Weepinbell",
      "__v": 4,
      "image_url": "http://pokeapi.co/media/img/70.png",
      "description": "Weepinbell has a large hook on its rear end. At night, the Pok�mon hooks on to a tree branch and goes to sleep. If it moves around in its sleep, it may wake up to find itself on the ground.  Weepinbell has a large hook on its rear end. At night, the Pok�mon hooks on to a tree branch and goes to sleep. If it moves around in its sleep, it may wake up to find itself on the ground.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/070.png",
      "types": [
        "poison",
        "grass"
      ],
      "evolutions": [
        {
          "method": "stone",
          "to": "Victreebel",
          "_id": "557a72cf7276d341b41ee1d5"
        }
      ]
    },
    {
      "_id": "557a72af7276d341b41ede40",
      "pkdx_id": 71,
      "national_id": 71,
      "name": "Victreebel",
      "__v": 5,
      "image_url": "http://pokeapi.co/media/img/71.png",
      "description": "Victreebel has a long vine that extends from its head. This vine is waved and flicked about as if it were an animal to attract prey. When an unsuspecting prey draws near, this Pok�mon swallows it whole.  Victreebel has a long vine that extends from its head. This vine is waved and flicked about as if it were an animal to attract prey. When an unsuspecting prey draws near, this Pok�mon swallows it whole.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/071.png",
      "types": [
        "poison",
        "grass"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72c07276d341b41ee007",
      "pkdx_id": 72,
      "national_id": 72,
      "name": "Tentacool",
      "__v": 5,
      "image_url": "http://pokeapi.co/media/img/72.png",
      "description": "Tentacool absorbs sunlight and refracts it using water inside its body to convert it into beam energy. This Pok�mon shoots beams from the small round organ above its eyes.  Tentacool's body is largely composed of water. If it is removed from the sea, it dries up like parchment. If this Pok�mon happens to become dehydrated, put it back into the sea.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/072.png",
      "types": [
        "poison",
        "water"
      ],
      "evolutions": [
        {
          "level": 30,
          "method": "level_up",
          "to": "Tentacruel",
          "_id": "557a72c07276d341b41ee008"
        }
      ]
    },
    {
      "_id": "557a72d17276d341b41ee20e",
      "pkdx_id": 73,
      "national_id": 73,
      "name": "Tentacruel",
      "__v": 4,
      "image_url": "http://pokeapi.co/media/img/73.png",
      "description": "Tentacruel has tentacles that can be freely elongated and shortened at will. It ensnares prey with its tentacles and weakens the prey by dosing it with a harsh toxin. It can catch up to 80 prey at the same time.  Tentacruel has large red orbs on its head. The orbs glow before lashing the vicinity with a harsh ultrasonic blast. This Pok�mon's outburst creates rough waves around it.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/073.png",
      "types": [
        "poison",
        "water"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72d17276d341b41ee205",
      "pkdx_id": 74,
      "national_id": 74,
      "name": "Geodude",
      "__v": 4,
      "image_url": "http://pokeapi.co/media/img/74.png",
      "description": "When Geodude sleeps deeply, it buries itself halfway into the ground. It will not awaken even if hikers step on it unwittingly. In the morning, this Pok�mon rolls downhill in search of food.  The longer a Geodude lives, the more its edges are chipped and worn away, making it more rounded in appearance. However, this Pok�mon's heart will remain hard, craggy, and rough always.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/074.png",
      "types": [
        "ground",
        "rock"
      ],
      "evolutions": [
        {
          "level": 25,
          "method": "level_up",
          "to": "Graveler",
          "_id": "557a72d17276d341b41ee206"
        }
      ]
    },
    {
      "_id": "557a72b17276d341b41ede6a",
      "pkdx_id": 75,
      "national_id": 75,
      "name": "Graveler",
      "__v": 4,
      "image_url": "http://pokeapi.co/media/img/75.png",
      "description": "Rocks are Graveler's favorite food. This Pok�mon will climb a mountain from the base to the summit, crunchingly feasting on rocks all the while. Upon reaching the peak, it rolls back down to the bottom.  Graveler grows by feeding on rocks. Apparently, it prefers to eat rocks that are covered in moss. This Pok�mon eats its way through a ton of rocks on a daily basis.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/075.png",
      "types": [
        "ground",
        "rock"
      ],
      "evolutions": [
        {
          "method": "trade",
          "to": "Golem",
          "_id": "557a72b17276d341b41ede6b"
        }
      ]
    },
    {
      "_id": "557a72b17276d341b41ede73",
      "pkdx_id": 76,
      "national_id": 76,
      "name": "Golem",
      "__v": 5,
      "image_url": "http://pokeapi.co/media/img/76.png",
      "description": "Golem is known for rolling down from mountains. To prevent them from rolling into the homes of people downhill, grooves have been dug into the sides of mountains to serve as guideways for diverting this Pok�mon's course.  Golem live up on mountains. If there is a large earthquake, these Pok�mon will come rolling down off the mountains en masse to the foothills below.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/076.png",
      "types": [
        "ground",
        "rock"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72d17276d341b41ee1fd",
      "pkdx_id": 77,
      "national_id": 77,
      "name": "Ponyta",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/77.png",
      "description": "Ponyta is very weak at birth. It can barely stand up. This Pok�mon becomes stronger by stumbling and falling to keep up with its parent.  Ponyta is very weak at birth. It can barely stand up. This Pok�mon becomes stronger by stumbling and falling to keep up with its parent.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/077.png",
      "types": [
        "fire"
      ],
      "evolutions": [
        {
          "level": 40,
          "method": "level_up",
          "to": "Rapidash",
          "_id": "557a72d17276d341b41ee1fe"
        }
      ]
    },
    {
      "_id": "557a72cf7276d341b41ee1cc",
      "pkdx_id": 78,
      "national_id": 78,
      "name": "Rapidash",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/78.png",
      "description": "Rapidash usually can be seen casually cantering in the fields and plains. However, when this Pok�mon turns serious, its fiery manes flare and blaze as it gallops its way up to 150 mph.  Rapidash usually can be seen casually cantering in the fields and plains. However, when this Pok�mon turns serious, its fiery manes flare and blaze as it gallops its way up to 150 mph.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/078.png",
      "types": [
        "fire"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72d07276d341b41ee1e2",
      "pkdx_id": 79,
      "national_id": 79,
      "name": "Slowpoke",
      "__v": 4,
      "image_url": "http://pokeapi.co/media/img/79.png",
      "description": "Slowpoke uses its tail to catch prey by dipping it in water at the side of a river. However, this Pok�mon often forgets what it's doing and often spends entire days just loafing at water's edge.  Slowpoke uses its tail to catch prey by dipping it in water at the side of a river. However, this Pok�mon often forgets what it's doing and often spends entire days just loafing at water's edge.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/079.png",
      "types": [
        "water",
        "psychic"
      ],
      "evolutions": [
        {
          "method": "trade",
          "to": "Slowking",
          "_id": "557a72d07276d341b41ee1e4"
        },
        {
          "level": 37,
          "method": "level_up",
          "to": "Slowbro",
          "_id": "557a72d07276d341b41ee1e3"
        }
      ]
    },
    {
      "_id": "557a72b17276d341b41ede66",
      "pkdx_id": 80,
      "national_id": 80,
      "name": "Slowbro",
      "__v": 4,
      "image_url": "http://pokeapi.co/media/img/80.png",
      "description": "Slowbro's tail has a Shellder firmly attached with a bite. As a result, the tail can't be used for fishing anymore. This causes Slowbro to grudgingly swim and catch prey instead.  Slowbro's tail has a Shellder firmly attached with a bite. As a result, the tail can't be used for fishing anymore. This causes Slowbro to grudgingly swim and catch prey instead.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/080.png",
      "types": [
        "water",
        "psychic"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72b47276d341b41edebc",
      "pkdx_id": 81,
      "national_id": 81,
      "name": "Magnemite",
      "__v": 4,
      "image_url": "http://pokeapi.co/media/img/81.png",
      "description": "Magnemite floats in the air by emitting electromagnetic waves from the units at its sides. These waves block gravity. This Pok�mon becomes incapable of flight if its internal electrical supply is depleted.  Magnemite attaches itself to power lines to feed on electricity. If your house has a power outage, check your circuit breakers. You may find a large number of this Pok�mon clinging to the breaker box.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/081.png",
      "types": [
        "steel",
        "electric"
      ],
      "evolutions": [
        {
          "level": 30,
          "method": "level_up",
          "to": "Magneton",
          "_id": "557a72b47276d341b41edebd"
        }
      ]
    },
    {
      "_id": "557a72b27276d341b41ede87",
      "pkdx_id": 82,
      "national_id": 82,
      "name": "Magneton",
      "__v": 5,
      "image_url": "http://pokeapi.co/media/img/82.png",
      "description": "Magneton emits a powerful magnetic force that is fatal to electronics and precision instruments. Because of this, it is said that some towns warn people to keep this Pok�mon inside a Pok� Ball.  Magneton emits a powerful magnetic force that is fatal to mechanical devices. As a result, large cities sound sirens to warn citizens of large-scale outbreaks of this Pok�mon.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/082.png",
      "types": [
        "steel",
        "electric"
      ],
      "evolutions": [
        {
          "method": "other",
          "to": "Magnezone",
          "_id": "557a72b27276d341b41ede88"
        }
      ]
    },
    {
      "_id": "557a72d07276d341b41ee1ec",
      "pkdx_id": 83,
      "national_id": 83,
      "name": "Farfetchd",
      "__v": 5,
      "image_url": "http://pokeapi.co/media/img/83.png",
      "description": "Farfetch'd is always seen with a stalk from a plant of some sort. Apparently, there are good stalks and bad stalks. This Pok�mon has been known to fight with others over stalks.  Farfetch'd is always seen with a stalk from a plant of some sort. Apparently, there are good stalks and bad stalks. This Pok�mon has been known to fight with others over stalks.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/083.png",
      "types": [
        "normal",
        "flying"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72cf7276d341b41ee1d9",
      "pkdx_id": 84,
      "national_id": 84,
      "name": "Doduo",
      "__v": 4,
      "image_url": "http://pokeapi.co/media/img/84.png",
      "description": "Doduo's two heads contain completely identical brains. A scientific study reported that on rare occasions, there will be examples of this Pok�mon possessing different sets of brains.  Doduo's two heads never sleep at the same time. Its two heads take turns sleeping, so one head can always keep watch for enemies while the other one sleeps.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/084.png",
      "types": [
        "normal",
        "flying"
      ],
      "evolutions": [
        {
          "level": 31,
          "method": "level_up",
          "to": "Dodrio",
          "_id": "557a72cf7276d341b41ee1da"
        }
      ]
    },
    {
      "_id": "557a72cf7276d341b41ee1c3",
      "pkdx_id": 85,
      "national_id": 85,
      "name": "Dodrio",
      "__v": 4,
      "image_url": "http://pokeapi.co/media/img/85.png",
      "description": "Apparently, the heads aren't the only parts of the body that Dodrio has three of. It has three sets of hearts and lungs as well, so it is capable of running long distances without rest.  Watch out if Dodrio's three heads are looking in three separate directions. It's a sure sign that it is on its guard. Don't go near this Pok�mon if it's being wary�it may decide to peck you.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/085.png",
      "types": [
        "normal",
        "flying"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72b17276d341b41ede6f",
      "pkdx_id": 86,
      "national_id": 86,
      "name": "Seel",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/86.png",
      "description": "Seel hunts for prey in the frigid sea underneath sheets of ice. When it needs to breathe, it punches a hole through the ice with the sharply protruding section of its head.  Seel hunts for prey in the frigid sea underneath sheets of ice. When it needs to breathe, it punches a hole through the ice with the sharply protruding section of its head.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/086.png",
      "types": [
        "water"
      ],
      "evolutions": [
        {
          "level": 34,
          "method": "level_up",
          "to": "Dewgong",
          "_id": "557a72b17276d341b41ede70"
        }
      ]
    },
    {
      "_id": "557a72b47276d341b41edecf",
      "pkdx_id": 87,
      "national_id": 87,
      "name": "Dewgong",
      "__v": 4,
      "image_url": "http://pokeapi.co/media/img/87.png",
      "description": "Dewgong loves to snooze on bitterly cold ice. The sight of this Pok�mon sleeping on a glacier was mistakenly thought to be a mermaid by a mariner long ago.  Dewgong loves to snooze on bitterly cold ice. The sight of this Pok�mon sleeping on a glacier was mistakenly thought to be a mermaid by a mariner long ago.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/087.png",
      "types": [
        "water",
        "ice"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72b27276d341b41ede8c",
      "pkdx_id": 88,
      "national_id": 88,
      "name": "Grimer",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/88.png",
      "description": "Grimer emerged from the sludge that settled on a polluted seabed. This Pok�mon loves anything filthy. It constantly leaks a horribly germ-infested fluid from all over its body.  Grimer's sludgy and rubbery body can be forced through any opening, however small it may be. This Pok�mon enters sewer pipes to drink filthy wastewater.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/088.png",
      "types": [
        "poison"
      ],
      "evolutions": [
        {
          "level": 38,
          "method": "level_up",
          "to": "Muk",
          "_id": "557a72b27276d341b41ede8d"
        }
      ]
    },
    {
      "_id": "557a72b27276d341b41ede90",
      "pkdx_id": 89,
      "national_id": 89,
      "name": "Muk",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/89.png",
      "description": "This Pok�mon's favorite food is anything that is repugnantly filthy. In dirty towns where people think nothing of throwing away litter on the streets, Muk are certain to gather.  From Muk's body seeps a foul fluid that gives off a nose-bendingly horrible stench. Just one drop of this Pok�mon's body fluid can turn a pool stagnant and rancid.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/089.png",
      "types": [
        "poison"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72b17276d341b41ede62",
      "pkdx_id": 90,
      "national_id": 90,
      "name": "Shellder",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/90.png",
      "description": "At night, this Pok�mon uses its broad tongue to burrow a hole in the seafloor sand and then sleep in it. While it is sleeping, Shellder closes its shell, but leaves its tongue hanging out.  At night, this Pok�mon uses its broad tongue to burrow a hole in the seafloor sand and then sleep in it. While it is sleeping, Shellder closes its shell, but leaves its tongue hanging out.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/090.png",
      "types": [
        "water"
      ],
      "evolutions": [
        {
          "method": "stone",
          "to": "Cloyster",
          "_id": "557a72b17276d341b41ede63"
        }
      ]
    },
    {
      "_id": "557a72b27276d341b41ede93",
      "pkdx_id": 91,
      "national_id": 91,
      "name": "Cloyster",
      "__v": 4,
      "image_url": "http://pokeapi.co/media/img/91.png",
      "description": "Cloyster is capable of swimming in the sea. It does so by swallowing water, then jetting it out toward the rear. This Pok�mon shoots spikes from its shell using the same system.  Cloyster is capable of swimming in the sea. It does so by swallowing water, then jetting it out toward the rear. This Pok�mon shoots spikes from its shell using the same system.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/091.png",
      "types": [
        "water",
        "ice"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72b27276d341b41ede97",
      "pkdx_id": 92,
      "national_id": 92,
      "name": "Gastly",
      "__v": 4,
      "image_url": "http://pokeapi.co/media/img/92.png",
      "description": "Gastly is largely composed of gaseous matter. When exposed to a strong wind, the gaseous body quickly dwindles away. Groups of this Pok�mon cluster under the eaves of houses to escape the ravages of wind.  Gastly is largely composed of gaseous matter. When exposed to a strong wind, the gaseous body quickly dwindles away. Groups of this Pok�mon cluster under the eaves of houses to escape the ravages of wind.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/092.png",
      "types": [
        "poison",
        "ghost"
      ],
      "evolutions": [
        {
          "level": 25,
          "method": "level_up",
          "to": "Haunter",
          "_id": "557a72b27276d341b41ede98"
        }
      ]
    },
    {
      "_id": "557a72b37276d341b41edeb0",
      "pkdx_id": 93,
      "national_id": 93,
      "name": "Haunter",
      "__v": 5,
      "image_url": "http://pokeapi.co/media/img/93.png",
      "description": "Haunter is a dangerous Pok�mon. If one beckons you while floating in darkness, you must never approach it. This Pok�mon will try to lick you with its tongue and steal your life away.  Haunter is a dangerous Pok�mon. If one beckons you while floating in darkness, you must never approach it. This Pok�mon will try to lick you with its tongue and steal your life away.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/093.png",
      "types": [
        "poison",
        "ghost"
      ],
      "evolutions": [
        {
          "method": "trade",
          "to": "Gengar",
          "_id": "557a72b37276d341b41edeb1"
        }
      ]
    },
    {
      "_id": "557a72b47276d341b41edeca",
      "pkdx_id": 94,
      "national_id": 94,
      "name": "Gengar",
      "__v": 5,
      "image_url": "http://pokeapi.co/media/img/94.png",
      "description": "Sometimes, on a dark night, your shadow thrown by a streetlight will suddenly and startlingly overtake you. It is actually a Gengar running past you, pretending to be your shadow.  Sometimes, on a dark night, your shadow thrown by a streetlight will suddenly and startlingly overtake you. It is actually a Gengar running past you, pretending to be your shadow.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/094.png",
      "types": [
        "poison",
        "ghost"
      ],
      "evolutions": [
        {
          "method": "other",
          "to": "Gengar-mega",
          "_id": "557a72b47276d341b41edecb"
        }
      ]
    },
    {
      "_id": "557a72b47276d341b41edec5",
      "pkdx_id": 95,
      "national_id": 95,
      "name": "Onix",
      "__v": 4,
      "image_url": "http://pokeapi.co/media/img/95.png",
      "description": "Onix has a magnet in its brain. It acts as a compass so that this Pok�mon does not lose direction while it is tunneling. As it grows older, its body becomes increasingly rounder and smoother.  Onix has a magnet in its brain. It acts as a compass so that this Pok�mon does not lose direction while it is tunneling. As it grows older, its body becomes increasingly rounder and smoother.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/095.png",
      "types": [
        "ground",
        "rock"
      ],
      "evolutions": [
        {
          "method": "trade",
          "to": "Steelix",
          "_id": "557a72b47276d341b41edec6"
        }
      ]
    },
    {
      "_id": "557a72b27276d341b41ede9c",
      "pkdx_id": 96,
      "national_id": 96,
      "name": "Drowzee",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/96.png",
      "description": "If your nose becomes itchy while you are sleeping, it's a sure sign that one of these Pok�mon is standing above your pillow and trying to eat your dream through your nostrils.  If your nose becomes itchy while you are sleeping, it's a sure sign that one of these Pok�mon is standing above your pillow and trying to eat your dream through your nostrils.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/096.png",
      "types": [
        "psychic"
      ],
      "evolutions": [
        {
          "level": 26,
          "method": "level_up",
          "to": "Hypno",
          "_id": "557a72b27276d341b41ede9d"
        }
      ]
    },
    {
      "_id": "557a72b87276d341b41edf45",
      "pkdx_id": 97,
      "national_id": 97,
      "name": "Hypno",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/97.png",
      "description": "Hypno holds a pendulum in its hand. The arcing movement and glitter of the pendulum lull the foe into a deep state of hypnosis. While this Pok�mon searches for prey, it polishes the pendulum.  Hypno holds a pendulum in its hand. The arcing movement and glitter of the pendulum lull the foe into a deep state of hypnosis. While this Pok�mon searches for prey, it polishes the pendulum.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/097.png",
      "types": [
        "psychic"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72b27276d341b41ede7e",
      "pkdx_id": 98,
      "national_id": 98,
      "name": "Krabby",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/98.png",
      "description": "Krabby live on beaches, burrowed inside holes dug into the sand. On sandy beaches with little in the way of food, these Pok�mon can be seen squabbling with each other over territory.  Krabby live on beaches, burrowed inside holes dug into the sand. On sandy beaches with little in the way of food, these Pok�mon can be seen squabbling with each other over territory.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/098.png",
      "types": [
        "water"
      ],
      "evolutions": [
        {
          "level": 28,
          "method": "level_up",
          "to": "Kingler",
          "_id": "557a72b27276d341b41ede7f"
        }
      ]
    },
    {
      "_id": "557a72b37276d341b41edea4",
      "pkdx_id": 99,
      "national_id": 99,
      "name": "Kingler",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/99.png",
      "description": "Kingler has an enormous, oversized claw. It waves this huge claw in the air to communicate with others. However, because the claw is so heavy, the Pok�mon quickly tires.  Kingler has an enormous, oversized claw. It waves this huge claw in the air to communicate with others. However, because the claw is so heavy, the Pok�mon quickly tires.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/099.png",
      "types": [
        "water"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72b37276d341b41edea7",
      "pkdx_id": 100,
      "national_id": 100,
      "name": "Voltorb",
      "__v": 3,
      "image_url": "http://pokeapi.co/media/img/100.png",
      "description": "Voltorb is extremely sensitive�it explodes at the slightest of shocks. It is rumored that it was first created when a Pok� Ball was exposed to a powerful pulse of energy.  Voltorb was first sighted at a company that manufactures Pok� Balls. The link between that sighting and the fact that this Pok�mon looks very similar to a Pok� Ball remains a mystery.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/100.png",
      "types": [
        "electric"
      ],
      "evolutions": [
        {
          "level": 30,
          "method": "level_up",
          "to": "Electrode",
          "_id": "557a72b37276d341b41edea8"
        }
      ]
    },
    {
      "_id": "557a72b47276d341b41eded3",
      "pkdx_id": 101,
      "national_id": 101,
      "name": "Electrode",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/101.png",
      "description": "One of Electrode's characteristics is its attraction to electricity. It is a problematical Pok�mon that congregates mostly at electrical power plants to feed on electricity that has just been generated.  Electrode eats electricity in the atmosphere. On days when lightning strikes, you can see this Pok�mon exploding all over the place from eating too much electricity.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/101.png",
      "types": [
        "electric"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72b37276d341b41edeab",
      "pkdx_id": 102,
      "national_id": 102,
      "name": "Exeggcute",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/102.png",
      "description": "This Pok�mon consists of six eggs that form a closely knit cluster. The six eggs attract each other and spin around. When cracks increasingly appear on the eggs, Exeggcute is close to evolution.  This Pok�mon consists of six eggs that form a closely knit cluster. The six eggs attract each other and spin around. When cracks increasingly appear on the eggs, Exeggcute is close to evolution.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/102.png",
      "types": [
        "grass",
        "psychic"
      ],
      "evolutions": [
        {
          "method": "stone",
          "to": "Exeggutor",
          "_id": "557a72b37276d341b41edeac"
        }
      ]
    },
    {
      "_id": "557a72b47276d341b41edec1",
      "pkdx_id": 103,
      "national_id": 103,
      "name": "Exeggutor",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/103.png",
      "description": "Exeggutor originally came from the tropics. Its heads steadily grow larger from exposure to strong sunlight. It is said that when the heads fall off, they group together to form Exeggcute.  Exeggutor originally came from the tropics. Its heads steadily grow larger from exposure to strong sunlight. It is said that when the heads fall off, they group together to form Exeggcute.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/103.png",
      "types": [
        "grass",
        "psychic"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72b47276d341b41eded6",
      "pkdx_id": 104,
      "national_id": 104,
      "name": "Cubone",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/104.png",
      "description": "Cubone pines for the mother it will never see again. Seeing a likeness of its mother in the full moon, it cries. The stains on the skull the Pok�mon wears are made by the tears it sheds.  Cubone pines for the mother it will never see again. Seeing a likeness of its mother in the full moon, it cries. The stains on the skull the Pok�mon wears are made by the tears it sheds.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/104.png",
      "types": [
        "ground"
      ],
      "evolutions": [
        {
          "level": 28,
          "method": "level_up",
          "to": "Marowak",
          "_id": "557a72b47276d341b41eded7"
        }
      ]
    },
    {
      "_id": "557a72b37276d341b41edeb9",
      "pkdx_id": 105,
      "national_id": 105,
      "name": "Marowak",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/105.png",
      "description": "Marowak is the evolved form of a Cubone that has overcome its sadness at the loss of its mother and grown tough. This Pok�mon's tempered and hardened spirit is not easily broken.  Marowak is the evolved form of a Cubone that has overcome its sadness at the loss of its mother and grown tough. This Pok�mon's tempered and hardened spirit is not easily broken.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/105.png",
      "types": [
        "ground"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72b77276d341b41edf17",
      "pkdx_id": 106,
      "national_id": 106,
      "name": "Hitmonlee",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/106.png",
      "description": "Hitmonlee's legs freely contract and stretch. Using these springlike legs, it bowls over foes with devastating kicks. After battle, it rubs down its legs and loosens the muscles to overcome fatigue.  Hitmonlee's legs freely contract and stretch. Using these springlike legs, it bowls over foes with devastating kicks. After battle, it rubs down its legs and loosens the muscles to overcome fatigue.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/106.png",
      "types": [
        "fighting"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72b57276d341b41edeef",
      "pkdx_id": 107,
      "national_id": 107,
      "name": "Hitmonchan",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/107.png",
      "description": "Hitmonchan is said to possess the spirit of a boxer who had been working toward a world championship. This Pok�mon has an indomitable spirit and will never give up in the face of adversity.  Hitmonchan is said to possess the spirit of a boxer who had been working toward a world championship. This Pok�mon has an indomitable spirit and will never give up in the face of adversity.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/107.png",
      "types": [
        "fighting"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72b37276d341b41edeb5",
      "pkdx_id": 108,
      "national_id": 108,
      "name": "Lickitung",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/108.png",
      "description": "Whenever Lickitung comes across something new, it will unfailingly give it a lick. It does so because it memorizes things by texture and by taste. It is somewhat put off by sour things.  Whenever Lickitung comes across something new, it will unfailingly give it a lick. It does so because it memorizes things by texture and by taste. It is somewhat put off by sour things.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/108.png",
      "types": [
        "normal"
      ],
      "evolutions": [
        {
          "method": "level_up",
          "to": "Lickilicky",
          "_id": "557a72b37276d341b41edeb6"
        }
      ]
    },
    {
      "_id": "557a72b47276d341b41ededa",
      "pkdx_id": 109,
      "national_id": 109,
      "name": "Koffing",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/109.png",
      "description": "Koffing embodies toxic substances. It mixes the toxins with raw garbage to set off a chemical reaction that results in a terribly powerful poison gas. The higher the temperature, the more gas is concocted by this Pok�mon.  If Koffing becomes agitated, it raises the toxicity of its internal gases and jets them out from all over its body. This Pok�mon may also overinflate its round body, then explode.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/109.png",
      "types": [
        "poison"
      ],
      "evolutions": [
        {
          "level": 35,
          "method": "level_up",
          "to": "Weezing",
          "_id": "557a72b47276d341b41ededb"
        }
      ]
    },
    {
      "_id": "557a72b77276d341b41edf1a",
      "pkdx_id": 110,
      "national_id": 110,
      "name": "Weezing",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/110.png",
      "description": "Weezing alternately shrinks and inflates its twin bodies to mix together toxic gases inside. The more the gases are mixed, the more powerful the toxins become. The Pok�mon also becomes more putrid.  Weezing loves the gases given off by rotted kitchen garbage. This Pok�mon will find a dirty, unkempt house and make it its home. At night, when the people in the house are asleep, it will go through the trash.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/110.png",
      "types": [
        "poison"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72b57276d341b41edee6",
      "pkdx_id": 111,
      "national_id": 111,
      "name": "Rhyhorn",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/111.png",
      "description": "Rhyhorn's brain is very small. It is so dense, while on a run it forgets why it started running in the first place. It apparently remembers sometimes if it demolishes something.  Rhyhorn runs in a straight line, smashing everything in its path. It is not bothered even if it rushes headlong into a block of steel. This Pok�mon may feel some pain from the collision the next day, however.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/111.png",
      "types": [
        "ground",
        "rock"
      ],
      "evolutions": [
        {
          "level": 42,
          "method": "level_up",
          "to": "Rhydon",
          "_id": "557a72b57276d341b41edee7"
        }
      ]
    },
    {
      "_id": "557a72b67276d341b41edf07",
      "pkdx_id": 112,
      "national_id": 112,
      "name": "Rhydon",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/112.png",
      "description": "Rhydon has a horn that serves as a drill. It is used for destroying rocks and boulders. This Pok�mon occasionally rams into streams of magma, but the armor-like hide prevents it from feeling the heat.  Rhydon's horn can crush even uncut diamonds. One sweeping blow of its tail can topple a building. This Pok�mon's hide is extremely tough. Even direct cannon hits don't leave a scratch.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/112.png",
      "types": [
        "ground",
        "rock"
      ],
      "evolutions": [
        {
          "method": "trade",
          "to": "Rhyperior",
          "_id": "557a72b67276d341b41edf08"
        }
      ]
    },
    {
      "_id": "557a72b97276d341b41edf4f",
      "pkdx_id": 113,
      "national_id": 113,
      "name": "Chansey",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/113.png",
      "description": "Chansey lays nutritionally excellent eggs on an everyday basis. The eggs are so delicious, they are easily and eagerly devoured by even those people who have lost their appetite.  Chansey lays nutritionally excellent eggs on an everyday basis. The eggs are so delicious, they are easily and eagerly devoured by even those people who have lost their appetite.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/113.png",
      "types": [
        "normal"
      ],
      "evolutions": [
        {
          "method": "level_up",
          "to": "Blissey",
          "_id": "557a72b97276d341b41edf50"
        }
      ]
    },
    {
      "_id": "557a72b87276d341b41edf3d",
      "pkdx_id": 114,
      "national_id": 114,
      "name": "Tangela",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/114.png",
      "description": "Tangela's vines snap off easily if they are grabbed. This happens without pain, allowing it to make a quick getaway. The lost vines are replaced by newly grown vines the very next day.  Tangela's vines snap off easily if they are grabbed. This happens without pain, allowing it to make a quick getaway. The lost vines are replaced by newly grown vines the very next day.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/114.png",
      "types": [
        "grass"
      ],
      "evolutions": [
        {
          "method": "level_up",
          "to": "Tangrowth",
          "_id": "557a72b87276d341b41edf3e"
        }
      ]
    },
    {
      "_id": "557a72b77276d341b41edf28",
      "pkdx_id": 115,
      "national_id": 115,
      "name": "Kangaskhan",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/115.png",
      "description": "If you come across a young Kangaskhan playing by itself, you must never disturb it or attempt to catch it. The baby Pok�mon's parent is sure to be in the area, and it will become violently enraged at you.  If you come across a young Kangaskhan playing by itself, you must never disturb it or attempt to catch it. The baby Pok�mon's parent is sure to be in the area, and it will become violently enraged at you.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/115.png",
      "types": [
        "normal"
      ],
      "evolutions": [
        {
          "method": "other",
          "to": "Kangaskhan-mega",
          "_id": "557a72b77276d341b41edf29"
        }
      ]
    },
    {
      "_id": "557a72b67276d341b41edf0f",
      "pkdx_id": 116,
      "national_id": 116,
      "name": "Horsea",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/116.png",
      "description": "If Horsea senses danger, it will reflexively spray a dense black ink from its mouth and try to escape. This Pok�mon swims by cleverly flapping the fin on its back.  Horsea eats small insects and moss off of rocks. If the ocean current turns fast, this Pok�mon anchors itself by wrapping its tail around rocks or coral to prevent being washed away.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/116.png",
      "types": [
        "water"
      ],
      "evolutions": [
        {
          "level": 32,
          "method": "level_up",
          "to": "Seadra",
          "_id": "557a72b67276d341b41edf10"
        }
      ]
    },
    {
      "_id": "557a72b87276d341b41edf2c",
      "pkdx_id": 117,
      "national_id": 117,
      "name": "Seadra",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/117.png",
      "description": "Seadra generates whirlpools by spinning its body. The whirlpools are strong enough to swallow even fishing boats. This Pok�mon weakens prey with these currents, then swallows it whole.  Seadra sleeps after wriggling itself between the branches of coral. Those trying to harvest coral are occasionally stung by this Pok�mon's poison barbs if they fail to notice it.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/117.png",
      "types": [
        "water"
      ],
      "evolutions": [
        {
          "method": "trade",
          "to": "Kingdra",
          "_id": "557a72b87276d341b41edf2d"
        }
      ]
    },
    {
      "_id": "557a72b77276d341b41edf1d",
      "pkdx_id": 118,
      "national_id": 118,
      "name": "Goldeen",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/118.png",
      "description": "Goldeen loves swimming wild and free in rivers and ponds. If one of these Pok�mon is placed in an aquarium, it will shatter even the thickest glass with one ram of its horn and make its escape.  Goldeen is a very beautiful Pok�mon with fins that billow elegantly in water. However, don't let your guard down around this Pok�mon�it could ram you powerfully with its horn.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/118.png",
      "types": [
        "water"
      ],
      "evolutions": [
        {
          "level": 33,
          "method": "level_up",
          "to": "Seaking",
          "_id": "557a72b77276d341b41edf1e"
        }
      ]
    },
    {
      "_id": "557a72b67276d341b41edf0c",
      "pkdx_id": 119,
      "national_id": 119,
      "name": "Seaking",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/119.png",
      "description": "Seaking is very protective of its eggs. The male and female will take turns patrolling around their nest and eggs. The guarding of eggs by these Pok�mon goes on for over a month.  In the autumn, Seaking males can be seen performing courtship dances in riverbeds to woo females. During this season, this Pok�mon's body coloration is at its most beautiful.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/119.png",
      "types": [
        "water"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72b57276d341b41edede",
      "pkdx_id": 120,
      "national_id": 120,
      "name": "Staryu",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/120.png",
      "description": "Staryu apparently communicates with the stars in the night sky by flashing the red core at the center of its body. If parts of its body are torn, this Pok�mon simply regenerates the missing pieces and limbs.  Staryu's center section has an organ called the core that shines bright red. If you go to a beach toward the end of summer, the glowing cores of these Pok�mon look like the stars in the sky.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/120.png",
      "types": [
        "water"
      ],
      "evolutions": [
        {
          "method": "stone",
          "to": "Starmie",
          "_id": "557a72b57276d341b41ededf"
        }
      ]
    },
    {
      "_id": "557a72b67276d341b41edf13",
      "pkdx_id": 121,
      "national_id": 121,
      "name": "Starmie",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/121.png",
      "description": "Starmie swims through water by spinning its star-shaped body as if it were a propeller on a ship. The core at the center of this Pok�mon's body glows in seven colors.  Starmie's center section�the core�glows brightly in seven colors. Because of its luminous nature, this Pok�mon has been given the nickname �the gem of the sea.\"",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/121.png",
      "types": [
        "water",
        "psychic"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72b97276d341b41edf48",
      "pkdx_id": 122,
      "national_id": 122,
      "name": "Mr-mime",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/122.png",
      "description": "Mr. Mime is a master of pantomime. Its gestures and motions convince watchers that something unseeable actually exists. Once the watchers are convinced, the unseeable thing exists as if it were real.  Mr. Mime is a master of pantomime. Its gestures and motions convince watchers that something unseeable actually exists. Once the watchers are convinced, the unseeable thing exists as if it were real.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/122.png",
      "types": [
        "fairy",
        "psychic"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72b57276d341b41edef7",
      "pkdx_id": 123,
      "national_id": 123,
      "name": "Scyther",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/123.png",
      "description": "Scyther is blindingly fast. Its blazing speed enhances the effectiveness of the twin scythes on its forearms. This Pok�mon's scythes are so effective, they can slice through thick logs in one wicked stroke.  Scyther is blindingly fast. Its blazing speed enhances the effectiveness of the twin scythes on its forearms. This Pok�mon's scythes are so effective, they can slice through thick logs in one wicked stroke.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/123.png",
      "types": [
        "flying",
        "bug"
      ],
      "evolutions": [
        {
          "method": "trade",
          "to": "Scizor",
          "_id": "557a72b57276d341b41edef8"
        }
      ]
    },
    {
      "_id": "557a72b57276d341b41edee2",
      "pkdx_id": 124,
      "national_id": 124,
      "name": "Jynx",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/124.png",
      "description": "Jynx walks rhythmically, swaying and shaking its hips as if it were dancing. Its motions are so bouncingly alluring, people seeing it are compelled to shake their hips without giving any thought to what they are doing.  Jynx walks rhythmically, swaying and shaking its hips as if it were dancing. Its motions are so bouncingly alluring, people seeing it are compelled to shake their hips without giving any thought to what they are doing.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/124.png",
      "types": [
        "ice",
        "psychic"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72b67276d341b41edf03",
      "pkdx_id": 125,
      "national_id": 125,
      "name": "Electabuzz",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/125.png",
      "description": "When a storm arrives, gangs of this Pok�mon compete with each other to scale heights that are likely to be stricken by lightning bolts. Some towns use Electabuzz in place of lightning rods.  When a storm arrives, gangs of this Pok�mon compete with each other to scale heights that are likely to be stricken by lightning bolts. Some towns use Electabuzz in place of lightning rods.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/125.png",
      "types": [
        "electric"
      ],
      "evolutions": [
        {
          "method": "trade",
          "to": "Electivire",
          "_id": "557a72b67276d341b41edf04"
        }
      ]
    },
    {
      "_id": "557a72b87276d341b41edf39",
      "pkdx_id": 126,
      "national_id": 126,
      "name": "Magmar",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/126.png",
      "description": "In battle, Magmar blows out intensely hot flames from all over its body to intimidate its opponent. This Pok�mon's fiery bursts create heat waves that ignite grass and trees in its surroundings.  In battle, Magmar blows out intensely hot flames from all over its body to intimidate its opponent. This Pok�mon's fiery bursts create heat waves that ignite grass and trees in its surroundings.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/126.png",
      "types": [
        "fire"
      ],
      "evolutions": [
        {
          "method": "trade",
          "to": "Magmortar",
          "_id": "557a72b87276d341b41edf3a"
        }
      ]
    },
    {
      "_id": "557a72b87276d341b41edf35",
      "pkdx_id": 127,
      "national_id": 127,
      "name": "Pinsir",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/127.png",
      "description": "Pinsir has a pair of massive horns. Protruding from the surface of these horns are thorns. These thorns are driven deeply into the foe's body when the pincer closes, making it tough for the foe to escape.  Pinsir is astoundingly strong. It can grip a foe weighing twice its weight in its horns and easily lift it. This Pok�mon's movements turn sluggish in cold places.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/127.png",
      "types": [
        "bug"
      ],
      "evolutions": [
        {
          "method": "other",
          "to": "Pinsir-mega",
          "_id": "557a72b87276d341b41edf36"
        }
      ]
    },
    {
      "_id": "557a72b67276d341b41edefc",
      "pkdx_id": 128,
      "national_id": 128,
      "name": "Tauros",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/128.png",
      "description": "This Pok�mon is not satisfied unless it is rampaging at all times. If there is no opponent for Tauros to battle, it will charge at thick trees and knock them down to calm itself.  This Pok�mon is not satisfied unless it is rampaging at all times. If there is no opponent for Tauros to battle, it will charge at thick trees and knock them down to calm itself.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/128.png",
      "types": [
        "normal"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72b57276d341b41edeeb",
      "pkdx_id": 129,
      "national_id": 129,
      "name": "Magikarp",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/129.png",
      "description": "Magikarp is virtually useless in battle as it can only splash around. As a result, it is considered to be weak. However, it is actually a very hardy Pok�mon that can survive in any body of water no matter how polluted it is.  Magikarp is a pathetic excuse for a Pok�mon that is only capable of flopping and splashing. This behavior prompted scientists to undertake research into it.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/129.png",
      "types": [
        "water"
      ],
      "evolutions": [
        {
          "level": 20,
          "method": "level_up",
          "to": "Gyarados",
          "_id": "557a72b57276d341b41edeec"
        }
      ]
    },
    {
      "_id": "557a72b57276d341b41edef2",
      "pkdx_id": 130,
      "national_id": 130,
      "name": "Gyarados",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/130.png",
      "description": "Once Gyarados goes on a rampage, its ferociously violent blood doesn't calm until it has burned everything down. There are records of this Pok�mon's rampages lasting a whole month.  When Magikarp evolves into Gyarados, its brain cells undergo a structural transformation. It is said that this transformation is to blame for this Pok�mon's wildly violent nature.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/130.png",
      "types": [
        "flying",
        "water"
      ],
      "evolutions": [
        {
          "method": "other",
          "to": "Gyarados-mega",
          "_id": "557a72b57276d341b41edef3"
        }
      ]
    },
    {
      "_id": "557a72b67276d341b41edeff",
      "pkdx_id": 131,
      "national_id": 131,
      "name": "Lapras",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/131.png",
      "description": "People have driven Lapras almost to the point of extinction. In the evenings, this Pok�mon is said to sing plaintively as it seeks what few others of its kind still remain.  People have driven Lapras almost to the point of extinction. In the evenings, this Pok�mon is said to sing plaintively as it seeks what few others of its kind still remain.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/131.png",
      "types": [
        "water",
        "ice"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72b97276d341b41edf4c",
      "pkdx_id": 132,
      "national_id": 132,
      "name": "Ditto",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/132.png",
      "description": "Ditto rearranges its cell structure to transform itself into other shapes. However, if it tries to transform itself into something by relying on its memory, this Pok�mon manages to get details wrong.  Ditto rearranges its cell structure to transform itself into other shapes. However, if it tries to transform itself into something by relying on its memory, this Pok�mon manages to get details wrong.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/132.png",
      "types": [
        "normal"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72bb7276d341b41edf8e",
      "pkdx_id": 133,
      "national_id": 133,
      "name": "Eevee",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/133.png",
      "description": "Eevee has an unstable genetic makeup that suddenly mutates due to the environment in which it lives. Radiation from various stones causes this Pok�mon to evolve.  Eevee has an unstable genetic makeup that suddenly mutates due to the environment in which it lives. Radiation from various stones causes this Pok�mon to evolve.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/133.png",
      "types": [
        "normal"
      ],
      "evolutions": [
        {
          "method": "other",
          "to": "Umbreon",
          "_id": "557a72bb7276d341b41edf96"
        },
        {
          "method": "level_up",
          "to": "Sylveon",
          "_id": "557a72bb7276d341b41edf95"
        },
        {
          "method": "other",
          "to": "Leafeon",
          "_id": "557a72bb7276d341b41edf94"
        },
        {
          "method": "other",
          "to": "Glaceon",
          "_id": "557a72bb7276d341b41edf93"
        },
        {
          "method": "stone",
          "to": "Vaporeon",
          "_id": "557a72bb7276d341b41edf92"
        },
        {
          "method": "stone",
          "to": "Jolteon",
          "_id": "557a72bb7276d341b41edf91"
        },
        {
          "method": "stone",
          "to": "Flareon",
          "_id": "557a72bb7276d341b41edf90"
        },
        {
          "method": "other",
          "to": "Espeon",
          "_id": "557a72bb7276d341b41edf8f"
        }
      ]
    },
    {
      "_id": "557a72ba7276d341b41edf61",
      "pkdx_id": 134,
      "national_id": 134,
      "name": "Vaporeon",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/134.png",
      "description": "Vaporeon underwent a spontaneous mutation and grew fins and gills that allow it to live underwater. This Pok�mon has the ability to freely control water.  Vaporeon underwent a spontaneous mutation and grew fins and gills that allow it to live underwater. This Pok�mon has the ability to freely control water.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/134.png",
      "types": [
        "water"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72b77276d341b41edf21",
      "pkdx_id": 135,
      "national_id": 135,
      "name": "Jolteon",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/135.png",
      "description": "Jolteon's cells generate a low level of electricity. This power is amplified by the static electricity of its fur, enabling the Pok�mon to drop thunderbolts. The bristling fur is made of electrically charged needles.  Jolteon's cells generate a low level of electricity. This power is amplified by the static electricity of its fur, enabling the Pok�mon to drop thunderbolts. The bristling fur is made of electrically charged needles.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/135.png",
      "types": [
        "electric"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72bd7276d341b41edfbd",
      "pkdx_id": 136,
      "national_id": 136,
      "name": "Flareon",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/136.png",
      "description": "Flareon's fluffy fur has a functional purpose�it releases heat into the air so that its body does not get excessively hot. This Pok�mon's body temperature can rise to a maximum of 1,650 degrees Fahrenheit.  Flareon's fluffy fur has a functional purpose�it releases heat into the air so that its body does not get excessively hot. This Pok�mon's body temperature can rise to a maximum of 1,650 degrees Fahrenheit.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/136.png",
      "types": [
        "fire"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72b87276d341b41edf41",
      "pkdx_id": 137,
      "national_id": 137,
      "name": "Porygon",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/137.png",
      "description": "Porygon is capable of reverting itself entirely back to program data and entering cyberspace. This Pok�mon is copy protected so it cannot be duplicated by copying.  Porygon is capable of reverting itself entirely back to program data and entering cyberspace. This Pok�mon is copy protected so it cannot be duplicated by copying.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/137.png",
      "types": [
        "normal"
      ],
      "evolutions": [
        {
          "method": "trade",
          "to": "Porygon2",
          "_id": "557a72b87276d341b41edf42"
        }
      ]
    },
    {
      "_id": "557a72b87276d341b41edf30",
      "pkdx_id": 138,
      "national_id": 138,
      "name": "Omanyte",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/138.png",
      "description": "Omanyte is one of the ancient and long-since-extinct Pok�mon that have been regenerated from fossils by people. If attacked by an enemy, it withdraws itself inside its hard shell.  Omanyte is one of the ancient and long-since-extinct Pok�mon that have been regenerated from fossils by people. If attacked by an enemy, it withdraws itself inside its hard shell.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/138.png",
      "types": [
        "rock",
        "water"
      ],
      "evolutions": [
        {
          "level": 40,
          "method": "level_up",
          "to": "Omastar",
          "_id": "557a72b87276d341b41edf31"
        }
      ]
    },
    {
      "_id": "557a72ba7276d341b41edf67",
      "pkdx_id": 139,
      "national_id": 139,
      "name": "Omastar",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/139.png",
      "description": "Omastar uses its tentacles to capture its prey. It is believed to have become extinct because its shell grew too large and heavy, causing its movements to become too slow and ponderous.  Omastar uses its tentacles to capture its prey. It is believed to have become extinct because its shell grew too large and heavy, causing its movements to become too slow and ponderous.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/139.png",
      "types": [
        "rock",
        "water"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72bc7276d341b41edf9d",
      "pkdx_id": 140,
      "national_id": 140,
      "name": "Kabuto",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/140.png",
      "description": "Kabuto is a Pok�mon that has been regenerated from a fossil. However, in extremely rare cases, living examples have been discovered. The Pok�mon has not changed at all for 300 million years.  Kabuto is a Pok�mon that has been regenerated from a fossil. However, in extremely rare cases, living examples have been discovered. The Pok�mon has not changed at all for 300 million years.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/140.png",
      "types": [
        "rock",
        "water"
      ],
      "evolutions": [
        {
          "level": 40,
          "method": "level_up",
          "to": "Kabutops",
          "_id": "557a72bc7276d341b41edf9e"
        }
      ]
    },
    {
      "_id": "557a72b77276d341b41edf24",
      "pkdx_id": 141,
      "national_id": 141,
      "name": "Kabutops",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/141.png",
      "description": "Kabutops swam underwater to hunt for its prey in ancient times. The Pok�mon was apparently evolving from being a water dweller to living on land as evident from the beginnings of change in its gills and legs.  Kabutops swam underwater to hunt for its prey in ancient times. The Pok�mon was apparently evolving from being a water dweller to living on land as evident from the beginnings of change in its gills and legs.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/141.png",
      "types": [
        "rock",
        "water"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72b97276d341b41edf53",
      "pkdx_id": 142,
      "national_id": 142,
      "name": "Aerodactyl",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/142.png",
      "description": "Aerodactyl is a Pok�mon from the age of dinosaurs. It was regenerated from genetic material extracted from amber. It is imagined to have been the king of the skies in ancient times.  Aerodactyl is a Pok�mon from the age of dinosaurs. It was regenerated from genetic material extracted from amber. It is imagined to have been the king of the skies in ancient times.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/142.png",
      "types": [
        "flying",
        "rock"
      ],
      "evolutions": [
        {
          "method": "other",
          "to": "Aerodactyl-mega",
          "_id": "557a72b97276d341b41edf54"
        }
      ]
    },
    {
      "_id": "557a72bb7276d341b41edf80",
      "pkdx_id": 143,
      "national_id": 143,
      "name": "Snorlax",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/143.png",
      "description": "Snorlax's typical day consists of nothing more than eating and sleeping. It is such a docile Pok�mon that there are children who use its expansive belly as a place to play.  Snorlax's typical day consists of nothing more than eating and sleeping. It is such a docile Pok�mon that there are children who use its expansive belly as a place to play.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/143.png",
      "types": [
        "normal"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72ba7276d341b41edf74",
      "pkdx_id": 144,
      "national_id": 144,
      "name": "Articuno",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/144.png",
      "description": "Articuno is a legendary bird Pok�mon that can control ice. The flapping of its wings chills the air. As a result, it is said that when this Pok�mon flies, snow will fall.  Articuno is a legendary bird Pok�mon that can control ice. The flapping of its wings chills the air. As a result, it is said that when this Pok�mon flies, snow will fall.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/144.png",
      "types": [
        "flying",
        "ice"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72bb7276d341b41edf78",
      "pkdx_id": 145,
      "national_id": 145,
      "name": "Zapdos",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/145.png",
      "description": "Zapdos is a legendary bird Pok�mon that has the ability to control electricity. It usually lives in thunderclouds. The Pok�mon gains power if it is stricken by lightning bolts.  Zapdos is a legendary bird Pok�mon that has the ability to control electricity. It usually lives in thunderclouds. The Pok�mon gains power if it is stricken by lightning bolts.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/145.png",
      "types": [
        "flying",
        "electric"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72b97276d341b41edf58",
      "pkdx_id": 146,
      "national_id": 146,
      "name": "Moltres",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/146.png",
      "description": "Moltres is a legendary bird Pok�mon that has the ability to control fire. If this Pok�mon is injured, it is said to dip its body in the molten magma of a volcano to burn and heal itself.  Moltres is a legendary bird Pok�mon that has the ability to control fire. If this Pok�mon is injured, it is said to dip its body in the molten magma of a volcano to burn and heal itself.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/146.png",
      "types": [
        "flying",
        "fire"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72bd7276d341b41edfb5",
      "pkdx_id": 147,
      "national_id": 147,
      "name": "Dratini",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/147.png",
      "description": "Dratini continually molts and sloughs off its old skin. It does so because the life energy within its body steadily builds to reach uncontrollable levels.  Dratini continually molts and sloughs off its old skin. It does so because the life energy within its body steadily builds to reach uncontrollable levels.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/147.png",
      "types": [
        "dragon"
      ],
      "evolutions": [
        {
          "level": 30,
          "method": "level_up",
          "to": "Dragonair",
          "_id": "557a72bd7276d341b41edfb6"
        }
      ]
    },
    {
      "_id": "557a72c07276d341b41ee019",
      "pkdx_id": 148,
      "national_id": 148,
      "name": "Dragonair",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/148.png",
      "description": "Dragonair stores an enormous amount of energy inside its body. It is said to alter weather conditions in its vicinity by discharging energy from the crystals on its neck and tail.  Dragonair stores an enormous amount of energy inside its body. It is said to alter weather conditions in its vicinity by discharging energy from the crystals on its neck and tail.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/148.png",
      "types": [
        "dragon"
      ],
      "evolutions": [
        {
          "level": 55,
          "method": "level_up",
          "to": "Dragonite",
          "_id": "557a72c07276d341b41ee01a"
        }
      ]
    },
    {
      "_id": "557a72bc7276d341b41edf99",
      "pkdx_id": 149,
      "national_id": 149,
      "name": "Dragonite",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/149.png",
      "description": "Dragonite is capable of circling the globe in just 16 hours. It is a kindhearted Pok�mon that leads lost and foundering ships in a storm to the safety of land.  Dragonite is capable of circling the globe in just 16 hours. It is a kindhearted Pok�mon that leads lost and foundering ships in a storm to the safety of land.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/149.png",
      "types": [
        "flying",
        "dragon"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72b97276d341b41edf5c",
      "pkdx_id": 150,
      "national_id": 150,
      "name": "Mewtwo",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/150.png",
      "description": "Mewtwo is a Pok�mon that was created by genetic manipulation. However, even though the scientific power of humans created this Pok�mon's body, they failed to endow Mewtwo with a compassionate heart.  Mewtwo is a Pok�mon that was created by genetic manipulation. However, even though the scientific power of humans created this Pok�mon's body, they failed to endow Mewtwo with a compassionate heart.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/150.png",
      "types": [
        "psychic"
      ],
      "evolutions": [
        {
          "method": "other",
          "to": "Mewtwo-mega-x",
          "_id": "557a72b97276d341b41edf5e"
        },
        {
          "method": "other",
          "to": "Mewtwo-mega-y",
          "_id": "557a72b97276d341b41edf5d"
        }
      ]
    },
    {
      "_id": "557a72ba7276d341b41edf64",
      "pkdx_id": 151,
      "national_id": 151,
      "name": "Mew",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/151.png",
      "description": "Mew is said to possess the genetic composition of all Pok�mon. It is capable of making itself invisible at will, so it entirely avoids notice even if it approaches people.  Mew is said to possess the genetic composition of all Pok�mon. It is capable of making itself invisible at will, so it entirely avoids notice even if it approaches people.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/151.png",
      "types": [
        "psychic"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72bb7276d341b41edf86",
      "pkdx_id": 152,
      "national_id": 152,
      "name": "Chikorita",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/152.png",
      "description": "In battle, Chikorita waves its leaf around to keep the foe at bay. However, a sweet fragrance also wafts from the leaf, becalming the battling Pok�mon and creating a cozy, friendly atmosphere all around.  In battle, Chikorita waves its leaf around to keep the foe at bay. However, a sweet fragrance also wafts from the leaf, becalming the battling Pok�mon and creating a cozy, friendly atmosphere all around.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/152.png",
      "types": [
        "grass"
      ],
      "evolutions": [
        {
          "level": 16,
          "method": "level_up",
          "to": "Bayleef",
          "_id": "557a72bb7276d341b41edf87"
        }
      ]
    },
    {
      "_id": "557a72c67276d341b41ee0c0",
      "pkdx_id": 153,
      "national_id": 153,
      "name": "Bayleef",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/153.png",
      "description": "Bayleef's neck is ringed by curled-up leaves. Inside each tubular leaf is a small shoot of a tree. The fragrance of this shoot makes people peppy.  Bayleef's neck is ringed by curled-up leaves. Inside each tubular leaf is a small shoot of a tree. The fragrance of this shoot makes people peppy.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/153.png",
      "types": [
        "grass"
      ],
      "evolutions": [
        {
          "level": 32,
          "method": "level_up",
          "to": "Meganium",
          "_id": "557a72c67276d341b41ee0c1"
        }
      ]
    },
    {
      "_id": "557a72bc7276d341b41edfa2",
      "pkdx_id": 154,
      "national_id": 154,
      "name": "Meganium",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/154.png",
      "description": "The fragrance of Meganium's flower soothes and calms emotions. In battle, this Pok�mon gives off more of its becalming scent to blunt the foe's fighting spirit.  The fragrance of Meganium's flower soothes and calms emotions. In battle, this Pok�mon gives off more of its becalming scent to blunt the foe's fighting spirit.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/154.png",
      "types": [
        "grass"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72bb7276d341b41edf8a",
      "pkdx_id": 155,
      "national_id": 155,
      "name": "Cyndaquil",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/155.png",
      "description": "Cyndaquil protects itself by flaring up the flames on its back. The flames are vigorous if the Pok�mon is angry. However, if it is tired, the flames splutter fitfully with incomplete combustion.  Cyndaquil protects itself by flaring up the flames on its back. The flames are vigorous if the Pok�mon is angry. However, if it is tired, the flames splutter fitfully with incomplete combustion.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/155.png",
      "types": [
        "fire"
      ],
      "evolutions": [
        {
          "level": 14,
          "method": "level_up",
          "to": "Quilava",
          "_id": "557a72bb7276d341b41edf8b"
        }
      ]
    },
    {
      "_id": "557a72c67276d341b41ee0bc",
      "pkdx_id": 156,
      "national_id": 156,
      "name": "Quilava",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/156.png",
      "description": "Quilava keeps its foes at bay with the intensity of its flames and gusts of superheated air. This Pok�mon applies its outstanding nimbleness to dodge attacks even while scorching the foe with flames.  Quilava keeps its foes at bay with the intensity of its flames and gusts of superheated air. This Pok�mon applies its outstanding nimbleness to dodge attacks even while scorching the foe with flames.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/156.png",
      "types": [
        "fire"
      ],
      "evolutions": [
        {
          "level": 36,
          "method": "level_up",
          "to": "Typhlosion",
          "_id": "557a72c67276d341b41ee0bd"
        }
      ]
    },
    {
      "_id": "557a72c67276d341b41ee0b9",
      "pkdx_id": 157,
      "national_id": 157,
      "name": "Typhlosion",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/157.png",
      "description": "Typhlosion obscures itself behind a shimmering heat haze that it creates using its intensely hot flames. This Pok�mon creates blazing explosive blasts that burn everything to cinders.  Typhlosion obscures itself behind a shimmering heat haze that it creates using its intensely hot flames. This Pok�mon creates blazing explosive blasts that burn everything to cinders.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/157.png",
      "types": [
        "fire"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72bf7276d341b41edff2",
      "pkdx_id": 158,
      "national_id": 158,
      "name": "Totodile",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/158.png",
      "description": "Despite the smallness of its body, Totodile's jaws are very powerful. While the Pok�mon may think it is just playfully nipping, its bite has enough power to cause serious injury.  Despite the smallness of its body, Totodile's jaws are very powerful. While the Pok�mon may think it is just playfully nipping, its bite has enough power to cause serious injury.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/158.png",
      "types": [
        "water"
      ],
      "evolutions": [
        {
          "level": 18,
          "method": "level_up",
          "to": "Croconaw",
          "_id": "557a72bf7276d341b41edff3"
        }
      ]
    },
    {
      "_id": "557a72bc7276d341b41edfa5",
      "pkdx_id": 159,
      "national_id": 159,
      "name": "Croconaw",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/159.png",
      "description": "Once Croconaw has clamped its jaws on its foe, it will absolutely not let go. Because the tips of its fangs are forked back like barbed fishhooks, they become impossible to remove when they have sunk in.  Once Croconaw has clamped its jaws on its foe, it will absolutely not let go. Because the tips of its fangs are forked back like barbed fishhooks, they become impossible to remove when they have sunk in.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/159.png",
      "types": [
        "water"
      ],
      "evolutions": [
        {
          "level": 30,
          "method": "level_up",
          "to": "Feraligatr",
          "_id": "557a72bc7276d341b41edfa6"
        }
      ]
    },
    {
      "_id": "557a72c67276d341b41ee0c9",
      "pkdx_id": 160,
      "national_id": 160,
      "name": "Feraligatr",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/160.png",
      "description": "Feraligatr intimidates its foes by opening its huge mouth. In battle, it will kick the ground hard with its thick and powerful hind legs to charge at the foe at an incredible speed.  Feraligatr intimidates its foes by opening its huge mouth. In battle, it will kick the ground hard with its thick and powerful hind legs to charge at the foe at an incredible speed.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/160.png",
      "types": [
        "water"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72bb7276d341b41edf7c",
      "pkdx_id": 161,
      "national_id": 161,
      "name": "Sentret",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/161.png",
      "description": "When Sentret sleeps, it does so while another stands guard. The sentry wakes the others at the first sign of danger. When this Pok�mon becomes separated from its pack, it becomes incapable of sleep due to fear.  When Sentret sleeps, it does so while another stands guard. The sentry wakes the others at the first sign of danger. When this Pok�mon becomes separated from its pack, it becomes incapable of sleep due to fear.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/161.png",
      "types": [
        "normal"
      ],
      "evolutions": [
        {
          "level": 15,
          "method": "level_up",
          "to": "Furret",
          "_id": "557a72bb7276d341b41edf7d"
        }
      ]
    },
    {
      "_id": "557a72c57276d341b41ee0a9",
      "pkdx_id": 162,
      "national_id": 162,
      "name": "Furret",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/162.png",
      "description": "Furret has a very slim build. When under attack, it can slickly squirm through narrow spaces and get away. In spite of its short limbs, this Pok�mon is very nimble and fleet.  Furret has a very slim build. When under attack, it can slickly squirm through narrow spaces and get away. In spite of its short limbs, this Pok�mon is very nimble and fleet.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/162.png",
      "types": [
        "normal"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72c67276d341b41ee0c4",
      "pkdx_id": 163,
      "national_id": 163,
      "name": "Hoothoot",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/163.png",
      "description": "Hoothoot has an internal organ that senses and tracks the earth's rotation. Using this special organ, this Pok�mon begins hooting at precisely the same time every day.  Hoothoot has an internal organ that senses and tracks the earth's rotation. Using this special organ, this Pok�mon begins hooting at precisely the same time every day.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/163.png",
      "types": [
        "normal",
        "flying"
      ],
      "evolutions": [
        {
          "level": 20,
          "method": "level_up",
          "to": "Noctowl",
          "_id": "557a72c67276d341b41ee0c5"
        }
      ]
    },
    {
      "_id": "557a72bd7276d341b41edfb9",
      "pkdx_id": 164,
      "national_id": 164,
      "name": "Noctowl",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/164.png",
      "description": "Noctowl never fails at catching prey in darkness. This Pok�mon owes its success to its superior vision that allows it to see in minimal light, and to its soft, supple wings that make no sound in flight.  Noctowl never fails at catching prey in darkness. This Pok�mon owes its success to its superior vision that allows it to see in minimal light, and to its soft, supple wings that make no sound in flight.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/164.png",
      "types": [
        "normal",
        "flying"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72ba7276d341b41edf6b",
      "pkdx_id": 165,
      "national_id": 165,
      "name": "Ledyba",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/165.png",
      "description": "Ledyba secretes an aromatic fluid from where its legs join its body. This fluid is used for communicating with others. This Pok�mon conveys its feelings to others by altering the fluid's scent.  Ledyba secretes an aromatic fluid from where its legs join its body. This fluid is used for communicating with others. This Pok�mon conveys its feelings to others by altering the fluid's scent.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/165.png",
      "types": [
        "flying",
        "bug"
      ],
      "evolutions": [
        {
          "level": 18,
          "method": "level_up",
          "to": "Ledian",
          "_id": "557a72ba7276d341b41edf6c"
        }
      ]
    },
    {
      "_id": "557a72ba7276d341b41edf70",
      "pkdx_id": 166,
      "national_id": 166,
      "name": "Ledian",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/166.png",
      "description": "It is said that in lands with clean air, where the stars fill the sky, there live Ledian in countless numbers. There is a good reason for this�the Pok�mon uses the light of the stars as its energy.  It is said that in lands with clean air, where the stars fill the sky, there live Ledian in countless numbers. There is a good reason for this�the Pok�mon uses the light of the stars as its energy.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/166.png",
      "types": [
        "flying",
        "bug"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72c37276d341b41ee05e",
      "pkdx_id": 167,
      "national_id": 167,
      "name": "Spinarak",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/167.png",
      "description": "The web spun by Spinarak can be considered its second nervous system. It is said that this Pok�mon can determine what kind of prey is touching its web just by the tiny vibrations it feels through the web's strands.  The web spun by Spinarak can be considered its second nervous system. It is said that this Pok�mon can determine what kind of prey is touching its web just by the tiny vibrations it feels through the web's strands.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/167.png",
      "types": [
        "poison",
        "bug"
      ],
      "evolutions": [
        {
          "level": 22,
          "method": "level_up",
          "to": "Ariados",
          "_id": "557a72c37276d341b41ee05f"
        }
      ]
    },
    {
      "_id": "557a72bd7276d341b41edfc0",
      "pkdx_id": 168,
      "national_id": 168,
      "name": "Ariados",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/168.png",
      "description": "Ariados's feet are tipped with tiny hooked claws that enable it to scuttle on ceilings and vertical walls. This Pok�mon constricts the foe with thin and strong silk webbing.  Ariados's feet are tipped with tiny hooked claws that enable it to scuttle on ceilings and vertical walls. This Pok�mon constricts the foe with thin and strong silk webbing.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/168.png",
      "types": [
        "poison",
        "bug"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72bf7276d341b41edffa",
      "pkdx_id": 169,
      "national_id": 169,
      "name": "Crobat",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/169.png",
      "description": "Crobat sneaks up on its intended prey using wings that barely make a sound. This Pok�mon rests by hanging on a tree branch with its rear legs that serve as wings.  If this Pok�mon is flying by fluttering only a pair of wings on either the forelegs or hind legs, it's proof that Crobat has been flying a long distance. It switches the wings it uses if it is tired.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/169.png",
      "types": [
        "flying",
        "poison"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72c47276d341b41ee087",
      "pkdx_id": 170,
      "national_id": 170,
      "name": "Chinchou",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/170.png",
      "description": "Chinchou's two antennas are filled with cells that generate strong electricity. This Pok�mon's cells create so much electrical power, it even makes itself tingle slightly.  Chinchou lets loose positive and negative electrical charges from its two antennas to make its prey faint. This Pok�mon flashes its electric lights to exchange signals with others.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/170.png",
      "types": [
        "water",
        "electric"
      ],
      "evolutions": [
        {
          "level": 27,
          "method": "level_up",
          "to": "Lanturn",
          "_id": "557a72c47276d341b41ee088"
        }
      ]
    },
    {
      "_id": "557a72c27276d341b41ee05a",
      "pkdx_id": 171,
      "national_id": 171,
      "name": "Lanturn",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/171.png",
      "description": "Lanturn is known to emit light. If you peer down into the dark sea from a ship at night, you can sometimes see this Pok�mon's light rising from the depths where it swims. It gives the sea an appearance of a starlit night.  Lanturn is nicknamed �the deep-sea star\" for its illuminated antenna. This Pok�mon produces light by causing a chemical reaction between bacteria and its bodily fluids inside the antenna.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/171.png",
      "types": [
        "water",
        "electric"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72c17276d341b41ee039",
      "pkdx_id": 172,
      "national_id": 172,
      "name": "Pichu",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/172.png",
      "description": "When Pichu plays with others, it may short out electricity with another Pichu, creating a shower of sparks. In that event, this Pok�mon will begin crying, startled by the flash of sparks.  Pichu charges itself with electricity more easily on days with thunderclouds or when the air is very dry. You can hear the crackling of static electricity coming off this Pok�mon.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/172.png",
      "types": [
        "electric"
      ],
      "evolutions": [
        {
          "method": "other",
          "to": "Pikachu",
          "_id": "557a72c17276d341b41ee03a"
        }
      ]
    },
    {
      "_id": "557a72bf7276d341b41edff6",
      "pkdx_id": 173,
      "national_id": 173,
      "name": "Cleffa",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/173.png",
      "description": "On nights with many shooting stars, Cleffa can be seen dancing in a ring. They dance through the night and stop only at the break of day, when these Pok�mon quench their thirst with the morning dew.  On nights with many shooting stars, Cleffa can be seen dancing in a ring. They dance through the night and stop only at the break of day, when these Pok�mon quench their thirst with the morning dew.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/173.png",
      "types": [
        "fairy"
      ],
      "evolutions": [
        {
          "method": "other",
          "to": "Clefairy",
          "_id": "557a72bf7276d341b41edff7"
        }
      ]
    },
    {
      "_id": "557a72c07276d341b41ee021",
      "pkdx_id": 174,
      "national_id": 174,
      "name": "Igglybuff",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/174.png",
      "description": "Igglybuff has a soft and plushy body that feels very much like a marshmallow. From this body wafts a gently sweet fragrance that soothes and calms the emotions of its foes.  Igglybuff's vocal cords are not sufficiently developed. It would hurt its throat if it were to sing too much. This Pok�mon gargles with freshwater from a clean stream.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/174.png",
      "types": [
        "normal",
        "fairy"
      ],
      "evolutions": [
        {
          "method": "other",
          "to": "Jigglypuff",
          "_id": "557a72c07276d341b41ee022"
        }
      ]
    },
    {
      "_id": "557a72c27276d341b41ee041",
      "pkdx_id": 175,
      "national_id": 175,
      "name": "Togepi",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/175.png",
      "description": "As its energy, Togepi uses the positive emotions of compassion and pleasure exuded by people and Pok�mon. This Pok�mon stores up feelings of happiness inside its shell, then shares them with others.  As its energy, Togepi uses the positive emotions of compassion and pleasure exuded by people and Pok�mon. This Pok�mon stores up feelings of happiness inside its shell, then shares them with others.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/175.png",
      "types": [
        "fairy"
      ],
      "evolutions": [
        {
          "method": "other",
          "to": "Togetic",
          "_id": "557a72c27276d341b41ee042"
        }
      ]
    },
    {
      "_id": "557a72c27276d341b41ee055",
      "pkdx_id": 176,
      "national_id": 176,
      "name": "Togetic",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/176.png",
      "description": "Togetic is said to be a Pok�mon that brings good fortune. When the Pok�mon spots someone who is pure of heart, it is said to appear and share its happiness with that person.  Togetic is said to be a Pok�mon that brings good fortune. When the Pok�mon spots someone who is pure of heart, it is said to appear and share its happiness with that person.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/176.png",
      "types": [
        "flying",
        "fairy"
      ],
      "evolutions": [
        {
          "method": "stone",
          "to": "Togekiss",
          "_id": "557a72c27276d341b41ee056"
        }
      ]
    },
    {
      "_id": "557a72c37276d341b41ee063",
      "pkdx_id": 177,
      "national_id": 177,
      "name": "Natu",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/177.png",
      "description": "Natu has a highly developed jumping ability. The Pok�mon flaps and leaps onto tree branches that are taller than grown-up people to pick at the tree's new shoots.  Natu cannot fly because its wings are not yet fully grown. If your eyes meet with this Pok�mon's eyes, it will stare back intently at you. But if you move even slightly, it will hop away to safety.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/177.png",
      "types": [
        "flying",
        "psychic"
      ],
      "evolutions": [
        {
          "level": 25,
          "method": "level_up",
          "to": "Xatu",
          "_id": "557a72c37276d341b41ee064"
        }
      ]
    },
    {
      "_id": "557a72c17276d341b41ee02c",
      "pkdx_id": 178,
      "national_id": 178,
      "name": "Xatu",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/178.png",
      "description": "Xatu is known to stand motionless while staring at the sun all day long. Some people revere it as a mystical Pok�mon out of their belief that Xatu is in possession of the power to see into the future.  Xatu stands rooted and still in one spot all day long. People believe that this Pok�mon does so out of fear of the terrible things it has foreseen in the future.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/178.png",
      "types": [
        "flying",
        "psychic"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72c77276d341b41ee0cc",
      "pkdx_id": 179,
      "national_id": 179,
      "name": "Mareep",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/179.png",
      "description": "Mareep's fluffy coat of wool rubs together and builds a static charge. The more static electricity is charged, the more brightly the lightbulb at the tip of its tail glows.  Mareep's fluffy coat of wool rubs together and builds a static charge. The more static electricity is charged, the more brightly the lightbulb at the tip of its tail glows.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/179.png",
      "types": [
        "electric"
      ],
      "evolutions": [
        {
          "level": 15,
          "method": "level_up",
          "to": "Flaaffy",
          "_id": "557a72c77276d341b41ee0cd"
        }
      ]
    },
    {
      "_id": "557a72c37276d341b41ee068",
      "pkdx_id": 180,
      "national_id": 180,
      "name": "Flaaffy",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/180.png",
      "description": "Flaaffy's wool quality changes so that it can generate a high amount of static electricity with a small amount of wool. The bare and slick parts of its hide are shielded against electricity.  Flaaffy's wool quality changes so that it can generate a high amount of static electricity with a small amount of wool. The bare and slick parts of its hide are shielded against electricity.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/180.png",
      "types": [
        "electric"
      ],
      "evolutions": [
        {
          "level": 30,
          "method": "level_up",
          "to": "Ampharos",
          "_id": "557a72c37276d341b41ee069"
        }
      ]
    },
    {
      "_id": "557a72c37276d341b41ee06f",
      "pkdx_id": 181,
      "national_id": 181,
      "name": "Ampharos",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/181.png",
      "description": "Ampharos gives off so much light that it can be seen even from space. People in the old days used the light of this Pok�mon to send signals back and forth with others far away.  Ampharos gives off so much light that it can be seen even from space. People in the old days used the light of this Pok�mon to send signals back and forth with others far away.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/181.png",
      "types": [
        "electric"
      ],
      "evolutions": [
        {
          "method": "other",
          "to": "Ampharos-mega",
          "_id": "557a72c37276d341b41ee070"
        }
      ]
    },
    {
      "_id": "557a72bb7276d341b41edf83",
      "pkdx_id": 182,
      "national_id": 182,
      "name": "Bellossom",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/182.png",
      "description": "A Bellossom grows flowers more beautifully if it has evolved from a smelly Gloom�the more stinky the better. At night, this Pok�mon closes its petals and goes to sleep.  When Bellossom gets exposed to plenty of sunlight, the leaves ringing its body begin to spin around. This Pok�mon's dancing is renowned in the southern lands.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/182.png",
      "types": [
        "grass"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72be7276d341b41edfe2",
      "pkdx_id": 183,
      "national_id": 183,
      "name": "Marill",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/183.png",
      "description": "When fishing for food at the edge of a fast-running stream, Marill wraps its tail around the trunk of a tree. This Pok�mon's tail is flexible and configured to stretch.  Marill's oil-filled tail acts much like a life preserver. If you see just its tail bobbing on the water's surface, it's a sure indication that this Pok�mon is diving beneath the water to feed on aquatic plants.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/183.png",
      "types": [
        "water",
        "fairy"
      ],
      "evolutions": [
        {
          "level": 18,
          "method": "level_up",
          "to": "Azumarill",
          "_id": "557a72be7276d341b41edfe3"
        }
      ]
    },
    {
      "_id": "557a72c67276d341b41ee0b5",
      "pkdx_id": 184,
      "national_id": 184,
      "name": "Azumarill",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/184.png",
      "description": "Azumarill can make balloons out of air. It makes these air balloons if it spots a drowning Pok�mon. The air balloons enable the Pok�mon in trouble to breathe.  Azumarill's long ears are indispensable sensors. By focusing its hearing, this Pok�mon can identify what kinds of prey are around, even in rough and fast-running rivers.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/184.png",
      "types": [
        "water",
        "fairy"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72c47276d341b41ee07b",
      "pkdx_id": 185,
      "national_id": 185,
      "name": "Sudowoodo",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/185.png",
      "description": "Sudowoodo camouflages itself as a tree to avoid being attacked by enemies. However, because its hands remain green throughout the year, the Pok�mon is easily identified as a fake during the winter.  Sudowoodo camouflages itself as a tree to avoid being attacked by enemies. However, because its hands remain green throughout the year, the Pok�mon is easily identified as a fake during the winter.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/185.png",
      "types": [
        "rock"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72c57276d341b41ee094",
      "pkdx_id": 186,
      "national_id": 186,
      "name": "Politoed",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/186.png",
      "description": "The curled hair on Politoed's head is proof of its status as a king. It is said that the longer and more curled the hair, the more respect this Pok�mon earns from its peers.  The curled hair on Politoed's head is proof of its status as a king. It is said that the longer and more curled the hair, the more respect this Pok�mon earns from its peers.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/186.png",
      "types": [
        "water"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72c77276d341b41ee0db",
      "pkdx_id": 187,
      "national_id": 187,
      "name": "Hoppip",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/187.png",
      "description": "This Pok�mon drifts and floats with the wind. If it senses the approach of strong winds, Hoppip links its leaves with other Hoppip to prepare against being blown away.  This Pok�mon drifts and floats with the wind. If it senses the approach of strong winds, Hoppip links its leaves with other Hoppip to prepare against being blown away.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/187.png",
      "types": [
        "flying",
        "grass"
      ],
      "evolutions": [
        {
          "level": 18,
          "method": "level_up",
          "to": "Skiploom",
          "_id": "557a72c77276d341b41ee0dc"
        }
      ]
    },
    {
      "_id": "557a72c57276d341b41ee0a4",
      "pkdx_id": 188,
      "national_id": 188,
      "name": "Skiploom",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/188.png",
      "description": "Skiploom's flower blossoms when the temperature rises above 64 degrees Fahrenheit. How much the flower opens depends on the temperature. For that reason, this Pok�mon is sometimes used as a thermometer.  Skiploom's flower blossoms when the temperature rises above 64 degrees Fahrenheit. How much the flower opens depends on the temperature. For that reason, this Pok�mon is sometimes used as a thermometer.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/188.png",
      "types": [
        "flying",
        "grass"
      ],
      "evolutions": [
        {
          "level": 27,
          "method": "level_up",
          "to": "Jumpluff",
          "_id": "557a72c57276d341b41ee0a5"
        }
      ]
    },
    {
      "_id": "557a72c27276d341b41ee04e",
      "pkdx_id": 189,
      "national_id": 189,
      "name": "Jumpluff",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/189.png",
      "description": "Jumpluff rides warm southern winds to cross the sea and fly to foreign lands. The Pok�mon descends to the ground when it encounters cold air while it is floating.  Jumpluff rides warm southern winds to cross the sea and fly to foreign lands. The Pok�mon descends to the ground when it encounters cold air while it is floating.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/189.png",
      "types": [
        "flying",
        "grass"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72be7276d341b41edfd5",
      "pkdx_id": 190,
      "national_id": 190,
      "name": "Aipom",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/190.png",
      "description": "Aipom's tail ends in a hand-like appendage that can be cleverly manipulated. However, because the Pok�mon uses its tail so much, its real hands have become rather clumsy.  Aipom's tail ends in a hand-like appendage that can be cleverly manipulated. However, because the Pok�mon uses its tail so much, its real hands have become rather clumsy.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/190.png",
      "types": [
        "normal"
      ],
      "evolutions": [
        {
          "method": "level_up",
          "to": "Ambipom",
          "_id": "557a72be7276d341b41edfd6"
        }
      ]
    },
    {
      "_id": "557a72c27276d341b41ee04a",
      "pkdx_id": 191,
      "national_id": 191,
      "name": "Sunkern",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/191.png",
      "description": "Sunkern tries to move as little as it possibly can. It does so because it tries to conserve all the nutrients it has stored in its body for its evolution. It will not eat a thing, subsisting only on morning dew.  Sunkern tries to move as little as it possibly can. It does so because it tries to conserve all the nutrients it has stored in its body for its evolution. It will not eat a thing, subsisting only on morning dew.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/191.png",
      "types": [
        "grass"
      ],
      "evolutions": [
        {
          "method": "stone",
          "to": "Sunflora",
          "_id": "557a72c27276d341b41ee04b"
        }
      ]
    },
    {
      "_id": "557a72c37276d341b41ee06c",
      "pkdx_id": 192,
      "national_id": 192,
      "name": "Sunflora",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/192.png",
      "description": "Sunflora converts solar energy into nutrition. It moves around actively in the daytime when it is warm. It stops moving as soon as the sun goes down for the night.  Sunflora converts solar energy into nutrition. It moves around actively in the daytime when it is warm. It stops moving as soon as the sun goes down for the night.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/192.png",
      "types": [
        "grass"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72c07276d341b41ee014",
      "pkdx_id": 193,
      "national_id": 193,
      "name": "Yanma",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/193.png",
      "description": "Yanma is capable of seeing 360 degrees without having to move its eyes. It is a great flier that is adept at making sudden stops and turning midair. This Pok�mon uses its flying ability to quickly chase down targeted prey.  Yanma is capable of seeing 360 degrees without having to move its eyes. It is a great flier that is adept at making sudden stops and turning midair. This Pok�mon uses its flying ability to quickly chase down targeted prey.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/193.png",
      "types": [
        "flying",
        "bug"
      ],
      "evolutions": [
        {
          "method": "level_up",
          "to": "Yanmega",
          "_id": "557a72c07276d341b41ee015"
        }
      ]
    },
    {
      "_id": "557a72bd7276d341b41edfc4",
      "pkdx_id": 194,
      "national_id": 194,
      "name": "Wooper",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/194.png",
      "description": "Wooper usually lives in water. However, it occasionally comes out onto land in search of food. On land, it coats its body with a gooey, toxic film.  Wooper usually lives in water. However, it occasionally comes out onto land in search of food. On land, it coats its body with a gooey, toxic film.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/194.png",
      "types": [
        "ground",
        "water"
      ],
      "evolutions": [
        {
          "level": 20,
          "method": "level_up",
          "to": "Quagsire",
          "_id": "557a72bd7276d341b41edfc5"
        }
      ]
    },
    {
      "_id": "557a72c67276d341b41ee0b1",
      "pkdx_id": 195,
      "national_id": 195,
      "name": "Quagsire",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/195.png",
      "description": "Quagsire hunts for food by leaving its mouth wide open in water and waiting for its prey to blunder in unaware. Because the Pok�mon does not move, it does not get very hungry.  Quagsire hunts for food by leaving its mouth wide open in water and waiting for its prey to blunder in unaware. Because the Pok�mon does not move, it does not get very hungry.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/195.png",
      "types": [
        "ground",
        "water"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72c27276d341b41ee052",
      "pkdx_id": 196,
      "national_id": 196,
      "name": "Espeon",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/196.png",
      "description": "Espeon is extremely loyal to any Trainer it considers to be worthy. It is said that this Pok�mon developed its precognitive powers to protect its Trainer from harm.  Espeon is extremely loyal to any Trainer it considers to be worthy. It is said that this Pok�mon developed its precognitive powers to protect its Trainer from harm.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/196.png",
      "types": [
        "psychic"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72bc7276d341b41edfa9",
      "pkdx_id": 197,
      "national_id": 197,
      "name": "Umbreon",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/197.png",
      "description": "Umbreon evolved as a result of exposure to the moon's waves. It hides silently in darkness and waits for its foes to make a move. The rings on its body glow when it leaps to attack.  Umbreon evolved as a result of exposure to the moon's waves. It hides silently in darkness and waits for its foes to make a move. The rings on its body glow when it leaps to attack.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/197.png",
      "types": [
        "dark"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72c47276d341b41ee08f",
      "pkdx_id": 198,
      "national_id": 198,
      "name": "Murkrow",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/198.png",
      "description": "Murkrow was feared and loathed as the alleged bearer of ill fortune. This Pok�mon shows strong interest in anything that sparkles or glitters. It will even try to steal rings from women.  Murkrow was feared and loathed as the alleged bearer of ill fortune. This Pok�mon shows strong interest in anything that sparkles or glitters. It will even try to steal rings from women.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/198.png",
      "types": [
        "flying",
        "dark"
      ],
      "evolutions": [
        {
          "method": "stone",
          "to": "Honchkrow",
          "_id": "557a72c47276d341b41ee090"
        }
      ]
    },
    {
      "_id": "557a72c07276d341b41ee00c",
      "pkdx_id": 199,
      "national_id": 199,
      "name": "Slowking",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/199.png",
      "description": "Slowking undertakes research every day in an effort to solve the mysteries of the world. However, this Pok�mon apparently forgets everything it has learned if the Shellder on its head comes off.  Slowking undertakes research every day in an effort to solve the mysteries of the world. However, this Pok�mon apparently forgets everything it has learned if the Shellder on its head comes off.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/199.png",
      "types": [
        "water",
        "psychic"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72cb7276d341b41ee15b",
      "pkdx_id": 200,
      "national_id": 200,
      "name": "Misdreavus",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/200.png",
      "description": "Misdreavus frightens people with a creepy, sobbing cry. The Pok�mon apparently uses its red spheres to absorb the fearful feelings of foes and turn them into nutrition.  Misdreavus frightens people with a creepy, sobbing cry. The Pok�mon apparently uses its red spheres to absorb the fearful feelings of foes and turn them into nutrition.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/200.png",
      "types": [
        "ghost"
      ],
      "evolutions": [
        {
          "method": "stone",
          "to": "Mismagius",
          "_id": "557a72cb7276d341b41ee15c"
        }
      ]
    },
    {
      "_id": "557a72c07276d341b41ee026",
      "pkdx_id": 201,
      "national_id": 201,
      "name": "Unown",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/201.png",
      "description": "This Pok�mon is shaped like ancient writing. It is a mystery as to which came first, the ancient writings or the various Unown. Research into this topic is ongoing but nothing is known.  This Pok�mon is shaped like ancient writing. It is a mystery as to which came first, the ancient writings or the various Unown. Research into this topic is ongoing but nothing is known.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/201.png",
      "types": [
        "psychic"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72c77276d341b41ee0e0",
      "pkdx_id": 202,
      "national_id": 202,
      "name": "Wobbuffet",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/202.png",
      "description": "Wobbuffet does nothing but endure attacks�it won't attack on its own. However, it won't endure an attack on its tail. When that happens, the Pok�mon will try to take the foe with it using Destiny Bond.  If two or more Wobbuffet meet, they will turn competitive and try to outdo each other's endurance. However, they may try to see which one can endure the longest without food. Trainers need to beware of this habit.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/202.png",
      "types": [
        "psychic"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72c47276d341b41ee07e",
      "pkdx_id": 203,
      "national_id": 203,
      "name": "Girafarig",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/203.png",
      "description": "Girafarig's rear head contains a tiny brain that is too small for thinking. However, the rear head doesn't need to sleep, so it can keep watch over its surroundings 24 hours a day.  Girafarig's rear head also has a brain, but it is small. The rear head attacks in response to smells and sounds. Approaching this Pok�mon from behind can cause the rear head to suddenly lash out and bite.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/203.png",
      "types": [
        "normal",
        "psychic"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72be7276d341b41edfde",
      "pkdx_id": 204,
      "national_id": 204,
      "name": "Pineco",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/204.png",
      "description": "Pineco hangs from a tree branch and patiently waits for prey to come along. If the Pok�mon is disturbed while eating by someone shaking its tree, it drops down to the ground and explodes with no warning.  Pineco hangs from a tree branch and patiently waits for prey to come along. If the Pok�mon is disturbed while eating by someone shaking its tree, it drops down to the ground and explodes with no warning.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/204.png",
      "types": [
        "bug"
      ],
      "evolutions": [
        {
          "level": 31,
          "method": "level_up",
          "to": "Forretress",
          "_id": "557a72be7276d341b41edfdf"
        }
      ]
    },
    {
      "_id": "557a72c07276d341b41ee010",
      "pkdx_id": 205,
      "national_id": 205,
      "name": "Forretress",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/205.png",
      "description": "Forretress conceals itself inside its hardened steel shell. The shell is opened when the Pok�mon is catching prey, but it does so at such a quick pace that the shell's inside cannot be seen.  Forretress conceals itself inside its hardened steel shell. The shell is opened when the Pok�mon is catching prey, but it does so at such a quick pace that the shell's inside cannot be seen.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/205.png",
      "types": [
        "bug",
        "steel"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72c17276d341b41ee029",
      "pkdx_id": 206,
      "national_id": 206,
      "name": "Dunsparce",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/206.png",
      "description": "Dunsparce has a drill for its tail. It uses this tail to burrow into the ground backward. This Pok�mon is known to make its nest in complex shapes deep under the ground.  Dunsparce has a drill for its tail. It uses this tail to burrow into the ground backward. This Pok�mon is known to make its nest in complex shapes deep under the ground.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/206.png",
      "types": [
        "normal"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72c57276d341b41ee0ac",
      "pkdx_id": 207,
      "national_id": 207,
      "name": "Gligar",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/207.png",
      "description": "Gligar glides through the air without a sound as if it were sliding. This Pok�mon hangs on to the face of its foe using its clawed hind legs and the large pincers on its forelegs, then injects the prey with its poison barb.  Gligar glides through the air without a sound as if it were sliding. This Pok�mon hangs on to the face of its foe using its clawed hind legs and the large pincers on its forelegs, then injects the prey with its poison barb.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/207.png",
      "types": [
        "flying",
        "ground"
      ],
      "evolutions": [
        {
          "method": "level_up",
          "to": "Gliscor",
          "_id": "557a72c57276d341b41ee0ad"
        }
      ]
    },
    {
      "_id": "557a72cc7276d341b41ee15f",
      "pkdx_id": 208,
      "national_id": 208,
      "name": "Steelix",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/208.png",
      "description": "Steelix lives even further underground than Onix. This Pok�mon is known to dig toward the earth's core. There are records of this Pok�mon reaching a depth of over six-tenths of a mile underground.  Steelix lives even further underground than Onix. This Pok�mon is known to dig toward the earth's core. There are records of this Pok�mon reaching a depth of over six-tenths of a mile underground.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/208.png",
      "types": [
        "ground",
        "steel"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72c57276d341b41ee09c",
      "pkdx_id": 209,
      "national_id": 209,
      "name": "Snubbull",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/209.png",
      "description": "By baring its fangs and making a scary face, Snubbull sends smaller Pok�mon scurrying away in terror. However, this Pok�mon seems a little sad at making its foes flee.  By baring its fangs and making a scary face, Snubbull sends smaller Pok�mon scurrying away in terror. However, this Pok�mon seems a little sad at making its foes flee.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/209.png",
      "types": [
        "fairy"
      ],
      "evolutions": [
        {
          "level": 23,
          "method": "level_up",
          "to": "Granbull",
          "_id": "557a72c57276d341b41ee09d"
        }
      ]
    },
    {
      "_id": "557a72c47276d341b41ee08c",
      "pkdx_id": 210,
      "national_id": 210,
      "name": "Granbull",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/210.png",
      "description": "Granbull has a particularly well-developed lower jaw. The enormous fangs are heavy, causing the Pok�mon to tip its head back for balance. Unless it is startled, it will not try to bite indiscriminately.  Granbull has a particularly well-developed lower jaw. The enormous fangs are heavy, causing the Pok�mon to tip its head back for balance. Unless it is startled, it will not try to bite indiscriminately.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/210.png",
      "types": [
        "fairy"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72bf7276d341b41edfee",
      "pkdx_id": 211,
      "national_id": 211,
      "name": "Qwilfish",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/211.png",
      "description": "Qwilfish sucks in water, inflating itself. This Pok�mon uses the pressure of the water it swallowed to shoot toxic quills all at once from all over its body. It finds swimming somewhat challenging.  Qwilfish sucks in water, inflating itself. This Pok�mon uses the pressure of the water it swallowed to shoot toxic quills all at once from all over its body. It finds swimming somewhat challenging.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/211.png",
      "types": [
        "poison",
        "water"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72c87276d341b41ee107",
      "pkdx_id": 212,
      "national_id": 212,
      "name": "Scizor",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/212.png",
      "description": "Scizor has a body with the hardness of steel. It is not easily fazed by ordinary sorts of attacks. This Pok�mon flaps its wings to regulate its body temperature.  Scizor has a body with the hardness of steel. It is not easily fazed by ordinary sorts of attacks. This Pok�mon flaps its wings to regulate its body temperature.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/212.png",
      "types": [
        "bug",
        "steel"
      ],
      "evolutions": [
        {
          "method": "other",
          "to": "Scizor-mega",
          "_id": "557a72c87276d341b41ee108"
        }
      ]
    },
    {
      "_id": "557a72c77276d341b41ee0d0",
      "pkdx_id": 213,
      "national_id": 213,
      "name": "Shuckle",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/213.png",
      "description": "Shuckle quietly hides itself under rocks, keeping its body concealed inside its hard shell while eating berries it has stored away. The berries mix with its body fluids to become a juice.  Shuckle quietly hides itself under rocks, keeping its body concealed inside its hard shell while eating berries it has stored away. The berries mix with its body fluids to become a juice.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/213.png",
      "types": [
        "rock",
        "bug"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72c77276d341b41ee0e3",
      "pkdx_id": 214,
      "national_id": 214,
      "name": "Heracross",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/214.png",
      "description": "Heracross has sharp claws on its feet. These are planted firmly into the ground or the bark of a tree, giving the Pok�mon a secure and solid footing to forcefully fling away foes with its proud horn.  Heracross charges in a straight line at its foe, slips beneath the foe's grasp, and then scoops up and hurls the opponent with its mighty horn. This Pok�mon even has enough power to topple a massive tree.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/214.png",
      "types": [
        "fighting",
        "bug"
      ],
      "evolutions": [
        {
          "method": "other",
          "to": "Heracross-mega",
          "_id": "557a72c77276d341b41ee0e4"
        }
      ]
    },
    {
      "_id": "557a72c57276d341b41ee097",
      "pkdx_id": 215,
      "national_id": 215,
      "name": "Sneasel",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/215.png",
      "description": "Sneasel scales trees by punching its hooked claws into the bark. This Pok�mon seeks out unguarded nests and steals eggs for food while the parents are away.  Sneasel scales trees by punching its hooked claws into the bark. This Pok�mon seeks out unguarded nests and steals eggs for food while the parents are away.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/215.png",
      "types": [
        "ice",
        "dark"
      ],
      "evolutions": [
        {
          "method": "level_up",
          "to": "Weavile",
          "_id": "557a72c57276d341b41ee098"
        }
      ]
    },
    {
      "_id": "557a72c57276d341b41ee0a0",
      "pkdx_id": 216,
      "national_id": 216,
      "name": "Teddiursa",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/216.png",
      "description": "This Pok�mon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill.  This Pok�mon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/216.png",
      "types": [
        "normal"
      ],
      "evolutions": [
        {
          "level": 30,
          "method": "level_up",
          "to": "Ursaring",
          "_id": "557a72c57276d341b41ee0a1"
        }
      ]
    },
    {
      "_id": "557a72bc7276d341b41edfac",
      "pkdx_id": 217,
      "national_id": 217,
      "name": "Ursaring",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/217.png",
      "description": "In the forests inhabited by Ursaring, it is said that there are many streams and towering trees where they gather food. This Pok�mon walks through its forest gathering food every day.  In the forests inhabited by Ursaring, it is said that there are many streams and towering trees where they gather food. This Pok�mon walks through its forest gathering food every day.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/217.png",
      "types": [
        "normal"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72bf7276d341b41edffe",
      "pkdx_id": 218,
      "national_id": 218,
      "name": "Slugma",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/218.png",
      "description": "Slugma does not have any blood in its body. Instead, intensely hot magma circulates throughout this Pok�mon's body, carrying essential nutrients and oxygen to its organs.  Molten magma courses throughout Slugma's circulatory system. If this Pok�mon is chilled, the magma cools and hardens. Its body turns brittle and chunks fall off, reducing its size.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/218.png",
      "types": [
        "fire"
      ],
      "evolutions": [
        {
          "level": 38,
          "method": "level_up",
          "to": "Magcargo",
          "_id": "557a72bf7276d341b41edfff"
        }
      ]
    },
    {
      "_id": "557a72be7276d341b41edfce",
      "pkdx_id": 219,
      "national_id": 219,
      "name": "Magcargo",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/219.png",
      "description": "Magcargo's body temperature is approximately 18,000 degrees Fahrenheit. Water is vaporized on contact. If this Pok�mon is caught in the rain, the raindrops instantly turn into steam, cloaking the area in a thick fog.  Magcargo's shell is actually its skin that hardened as a result of cooling. Its shell is very brittle and fragile�just touching it causes it to crumble apart. This Pok�mon returns to its original size by dipping itself in magma.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/219.png",
      "types": [
        "rock",
        "fire"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72c47276d341b41ee076",
      "pkdx_id": 220,
      "national_id": 220,
      "name": "Swinub",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/220.png",
      "description": "Swinub roots for food by rubbing its snout against the ground. Its favorite food is a mushroom that grows under the cover of dead grass. This Pok�mon occasionally roots out hot springs.  Swinub roots for food by rubbing its snout against the ground. Its favorite food is a mushroom that grows under the cover of dead grass. This Pok�mon occasionally roots out hot springs.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/220.png",
      "types": [
        "ground",
        "ice"
      ],
      "evolutions": [
        {
          "level": 33,
          "method": "level_up",
          "to": "Piloswine",
          "_id": "557a72c47276d341b41ee077"
        }
      ]
    },
    {
      "_id": "557a72c87276d341b41ee0ee",
      "pkdx_id": 221,
      "national_id": 221,
      "name": "Piloswine",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/221.png",
      "description": "Piloswine is covered by a thick coat of long hair that enables it to endure the freezing cold. This Pok�mon uses its tusks to dig up food that has been buried under ice.  Piloswine is covered by a thick coat of long hair that enables it to endure the freezing cold. This Pok�mon uses its tusks to dig up food that has been buried under ice.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/221.png",
      "types": [
        "ground",
        "ice"
      ],
      "evolutions": [
        {
          "method": "level_up",
          "to": "Mamoswine",
          "_id": "557a72c87276d341b41ee0ef"
        }
      ]
    },
    {
      "_id": "557a72c97276d341b41ee115",
      "pkdx_id": 222,
      "national_id": 222,
      "name": "Corsola",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/222.png",
      "description": "Clusters of Corsola congregate in warm seas where they serve as ideal hiding places for smaller Pok�mon. When the water temperature falls, this Pok�mon migrates to the southern seas.  Corsola's branches glitter very beautifully in seven colors when they catch sunlight. If any branch breaks off, this Pok�mon grows it back in just one night.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/222.png",
      "types": [
        "rock",
        "water"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72c77276d341b41ee0d7",
      "pkdx_id": 223,
      "national_id": 223,
      "name": "Remoraid",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/223.png",
      "description": "Remoraid sucks in water, then expels it at high velocity using its abdominal muscles to shoot down flying prey. When evolution draws near, this Pok�mon travels downstream from rivers.  Remoraid sucks in water, then expels it at high velocity using its abdominal muscles to shoot down flying prey. When evolution draws near, this Pok�mon travels downstream from rivers.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/223.png",
      "types": [
        "water"
      ],
      "evolutions": [
        {
          "level": 25,
          "method": "level_up",
          "to": "Octillery",
          "_id": "557a72c77276d341b41ee0d8"
        }
      ]
    },
    {
      "_id": "557a72be7276d341b41edfd2",
      "pkdx_id": 224,
      "national_id": 224,
      "name": "Octillery",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/224.png",
      "description": "Octillery grabs onto its foe using its tentacles. This Pok�mon tries to immobilize it before delivering the finishing blow. If the foe turns out to be too strong, Octillery spews ink to escape.  Octillery grabs onto its foe using its tentacles. This Pok�mon tries to immobilize it before delivering the finishing blow. If the foe turns out to be too strong, Octillery spews ink to escape.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/224.png",
      "types": [
        "water"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72cb7276d341b41ee145",
      "pkdx_id": 225,
      "national_id": 225,
      "name": "Delibird",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/225.png",
      "description": "Delibird carries its food bundled up in its tail. There once was a famous explorer who managed to reach the peak of the world's highest mountain, thanks to one of these Pok�mon sharing its food.  Delibird carries its food bundled up in its tail. There once was a famous explorer who managed to reach the peak of the world's highest mountain, thanks to one of these Pok�mon sharing its food.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/225.png",
      "types": [
        "flying",
        "ice"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72ca7276d341b41ee12c",
      "pkdx_id": 226,
      "national_id": 226,
      "name": "Mantine",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/226.png",
      "description": "On sunny days, schools of Mantine can be seen elegantly leaping over the sea's waves. This Pok�mon is not bothered by the Remoraid that hitches rides.  On sunny days, schools of Mantine can be seen elegantly leaping over the sea's waves. This Pok�mon is not bothered by the Remoraid that hitches rides.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/226.png",
      "types": [
        "flying",
        "water"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72ca7276d341b41ee128",
      "pkdx_id": 227,
      "national_id": 227,
      "name": "Skarmory",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/227.png",
      "description": "Skarmory's steel wings become tattered and bashed in from repeated battles. Once a year, the battered wings grow back completely, restoring the cutting edges to their pristine state.  Skarmory is entirely encased in hard, protective armor. This Pok�mon flies at close to 190 mph. It slashes foes with its wings that possess swordlike cutting edges.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/227.png",
      "types": [
        "flying",
        "steel"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72c27276d341b41ee045",
      "pkdx_id": 228,
      "national_id": 228,
      "name": "Houndour",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/228.png",
      "description": "Houndour hunt as a coordinated pack. They communicate with each other using a variety of cries to corner their prey. This Pok�mon's remarkable teamwork is unparalleled.  Houndour hunt as a coordinated pack. They communicate with each other using a variety of cries to corner their prey. This Pok�mon's remarkable teamwork is unparalleled.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/228.png",
      "types": [
        "fire",
        "dark"
      ],
      "evolutions": [
        {
          "level": 24,
          "method": "level_up",
          "to": "Houndoom",
          "_id": "557a72c27276d341b41ee046"
        }
      ]
    },
    {
      "_id": "557a72cb7276d341b41ee14d",
      "pkdx_id": 229,
      "national_id": 229,
      "name": "Houndoom",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/229.png",
      "description": "In a Houndoom pack, the one with its horns raked sharply toward the back serves a leadership role. These Pok�mon choose their leader by fighting among themselves.  In a Houndoom pack, the one with its horns raked sharply toward the back serves a leadership role. These Pok�mon choose their leader by fighting among themselves.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/229.png",
      "types": [
        "fire",
        "dark"
      ],
      "evolutions": [
        {
          "method": "other",
          "to": "Houndoom-mega",
          "_id": "557a72cb7276d341b41ee14e"
        }
      ]
    },
    {
      "_id": "557a72cb7276d341b41ee149",
      "pkdx_id": 230,
      "national_id": 230,
      "name": "Kingdra",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/230.png",
      "description": "Kingdra sleeps on the seafloor where it is otherwise devoid of life. When a storm arrives, the Pok�mon is said to awaken and wander about in search of prey.  Kingdra lives at extreme ocean depths that are otherwise uninhabited. It has long been believed that the yawning of this Pok�mon creates spiraling ocean currents.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/230.png",
      "types": [
        "water",
        "dragon"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72c17276d341b41ee03d",
      "pkdx_id": 231,
      "national_id": 231,
      "name": "Phanpy",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/231.png",
      "description": "Phanpy uses its long nose to shower itself. When others gather around, they thoroughly douse each other with water. These Pok�mon can be seen drying their soaking-wet bodies at the edge of water.  For its nest, Phanpy digs a vertical pit in the ground at the edge of a river. It marks the area around its nest with its trunk to let the others know that the area has been claimed.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/231.png",
      "types": [
        "ground"
      ],
      "evolutions": [
        {
          "level": 25,
          "method": "level_up",
          "to": "Donphan",
          "_id": "557a72c17276d341b41ee03e"
        }
      ]
    },
    {
      "_id": "557a72b17276d341b41ede7b",
      "pkdx_id": 232,
      "national_id": 232,
      "name": "Donphan",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/232.png",
      "description": "If Donphan were to tackle with its hard body, even a house could be destroyed. Using its massive strength, the Pok�mon helps clear rock and mud slides that block mountain trails.  Donphan's favorite attack is curling its body into a ball, then charging at its foe while rolling at high speed. Once it starts rolling, this Pok�mon can't stop very easily.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/232.png",
      "types": [
        "ground"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72c87276d341b41ee10c",
      "pkdx_id": 233,
      "national_id": 233,
      "name": "Porygon2",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/233.png",
      "description": "Porygon2 was created by humans using the power of science. The man-made Pok�mon has been endowed with artificial intelligence that enables it to learn new gestures and emotions on its own.  Porygon2 was created by humans using the power of science. The man-made Pok�mon has been endowed with artificial intelligence that enables it to learn new gestures and emotions on its own.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/233.png",
      "types": [
        "normal"
      ],
      "evolutions": [
        {
          "method": "trade",
          "to": "Porygon-z",
          "_id": "557a72c87276d341b41ee10d"
        }
      ]
    },
    {
      "_id": "557a72ca7276d341b41ee130",
      "pkdx_id": 234,
      "national_id": 234,
      "name": "Stantler",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/234.png",
      "description": "Stantler's magnificent antlers were traded at high prices as works of art. As a result, this Pok�mon was hunted close to extinction by those who were after the priceless antlers.  Stantler's magnificent antlers were traded at high prices as works of art. As a result, this Pok�mon was hunted close to extinction by those who were after the priceless antlers.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/234.png",
      "types": [
        "normal"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72c77276d341b41ee0d4",
      "pkdx_id": 235,
      "national_id": 235,
      "name": "Smeargle",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/235.png",
      "description": "Smeargle marks the boundaries of its territory using a body fluid that leaks out from the tip of its tail. Over 5,000 different marks left by this Pok�mon have been found.  Smeargle marks the boundaries of its territory using a body fluid that leaks out from the tip of its tail. Over 5,000 different marks left by this Pok�mon have been found.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/235.png",
      "types": [
        "normal"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72c77276d341b41ee0e8",
      "pkdx_id": 236,
      "national_id": 236,
      "name": "Tyrogue",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/236.png",
      "description": "Tyrogue becomes stressed out if it does not get to train every day. When raising this Pok�mon, the Trainer must establish and uphold various training methods.  Tyrogue becomes stressed out if it does not get to train every day. When raising this Pok�mon, the Trainer must establish and uphold various training methods.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/236.png",
      "types": [
        "fighting"
      ],
      "evolutions": [
        {
          "level": 20,
          "method": "level_up",
          "to": "Hitmontop",
          "_id": "557a72c77276d341b41ee0eb"
        },
        {
          "level": 20,
          "method": "level_up",
          "to": "Hitmonlee",
          "_id": "557a72c77276d341b41ee0ea"
        },
        {
          "level": 20,
          "method": "level_up",
          "to": "Hitmonchan",
          "_id": "557a72c77276d341b41ee0e9"
        }
      ]
    },
    {
      "_id": "557a72ca7276d341b41ee137",
      "pkdx_id": 237,
      "national_id": 237,
      "name": "Hitmontop",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/237.png",
      "description": "Hitmontop spins on its head at high speed, all the while delivering kicks. This technique is a remarkable mix of both offense and defense at the same time. The Pok�mon travels faster spinning than it does walking.  Hitmontop spins on its head at high speed, all the while delivering kicks. This technique is a remarkable mix of both offense and defense at the same time. The Pok�mon travels faster spinning than it does walking.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/237.png",
      "types": [
        "fighting"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72c97276d341b41ee110",
      "pkdx_id": 238,
      "national_id": 238,
      "name": "Smoochum",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/238.png",
      "description": "Smoochum actively runs about, but also falls quite often. Whenever the chance arrives, it will look for its reflection to make sure its face hasn't become dirty.  Smoochum actively runs about, but also falls quite often. Whenever the chance arrives, it will look for its reflection to make sure its face hasn't become dirty.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/238.png",
      "types": [
        "ice",
        "psychic"
      ],
      "evolutions": [
        {
          "method": "other",
          "to": "Jynx",
          "_id": "557a72c97276d341b41ee111"
        }
      ]
    },
    {
      "_id": "557a72b17276d341b41ede77",
      "pkdx_id": 239,
      "national_id": 239,
      "name": "Elekid",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/239.png",
      "description": "Elekid stores electricity in its body. If it touches metal and accidentally discharges all its built-up electricity, this Pok�mon begins swinging its arms in circles to recharge itself.  Elekid stores electricity in its body. If it touches metal and accidentally discharges all its built-up electricity, this Pok�mon begins swinging its arms in circles to recharge itself.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/239.png",
      "types": [
        "electric"
      ],
      "evolutions": [
        {
          "method": "other",
          "to": "Electabuzz",
          "_id": "557a72b17276d341b41ede78"
        }
      ]
    },
    {
      "_id": "557a72c87276d341b41ee0f3",
      "pkdx_id": 240,
      "national_id": 240,
      "name": "Magby",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/240.png",
      "description": "Magby's state of health is determined by observing the fire it breathes. If the Pok�mon is spouting yellow flames from its mouth, it is in good health. When it is fatigued, black smoke will be mixed in with the flames.  Magby's state of health is determined by observing the fire it breathes. If the Pok�mon is spouting yellow flames from its mouth, it is in good health. When it is fatigued, black smoke will be mixed in with the flames.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/240.png",
      "types": [
        "fire"
      ],
      "evolutions": [
        {
          "method": "other",
          "to": "Magmar",
          "_id": "557a72c87276d341b41ee0f4"
        }
      ]
    },
    {
      "_id": "557a72c97276d341b41ee122",
      "pkdx_id": 241,
      "national_id": 241,
      "name": "Miltank",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/241.png",
      "description": "Miltank gives over five gallons of milk on a daily basis. Its sweet milk is enjoyed by children and grown-ups alike. People who can't drink milk turn it into yogurt and eat it instead.  Miltank gives over five gallons of milk on a daily basis. Its sweet milk is enjoyed by children and grown-ups alike. People who can't drink milk turn it into yogurt and eat it instead.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/241.png",
      "types": [
        "normal"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72cd7276d341b41ee190",
      "pkdx_id": 242,
      "national_id": 242,
      "name": "Blissey",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/242.png",
      "description": "Blissey senses sadness with its fluffy coat of fur. If it does so, this Pok�mon will rush over to a sad person, no matter how far away, to share a Lucky Egg that brings a smile to any face.  Blissey senses sadness with its fluffy coat of fur. If it does so, this Pok�mon will rush over to a sad person, no matter how far away, to share a Lucky Egg that brings a smile to any face.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/242.png",
      "types": [
        "normal"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72cb7276d341b41ee142",
      "pkdx_id": 243,
      "national_id": 243,
      "name": "Raikou",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/243.png",
      "description": "Raikou embodies the speed of lightning. The roars of this Pok�mon send shock waves shuddering through the air and shake the ground as if lightning bolts had come crashing down.  Raikou embodies the speed of lightning. The roars of this Pok�mon send shock waves shuddering through the air and shake the ground as if lightning bolts had come crashing down.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/243.png",
      "types": [
        "electric"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72c97276d341b41ee125",
      "pkdx_id": 244,
      "national_id": 244,
      "name": "Entei",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/244.png",
      "description": "Entei embodies the passion of magma. This Pok�mon is thought to have been born in the eruption of a volcano. It sends up massive bursts of fire that utterly consume all that they touch.  Entei embodies the passion of magma. This Pok�mon is thought to have been born in the eruption of a volcano. It sends up massive bursts of fire that utterly consume all that they touch.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/244.png",
      "types": [
        "fire"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72c87276d341b41ee0fb",
      "pkdx_id": 245,
      "national_id": 245,
      "name": "Suicune",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/245.png",
      "description": "Suicune embodies the compassion of a pure spring of water. It runs across the land with gracefulness. This Pok�mon has the power to purify dirty water.  Suicune embodies the compassion of a pure spring of water. It runs across the land with gracefulness. This Pok�mon has the power to purify dirty water.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/245.png",
      "types": [
        "water"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72cb7276d341b41ee156",
      "pkdx_id": 246,
      "national_id": 246,
      "name": "Larvitar",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/246.png",
      "description": "Larvitar is born deep under the ground. To come up to the surface, this Pok�mon must eat its way through the soil above. Until it does so, Larvitar cannot see its parents.  Larvitar is born deep under the ground. To come up to the surface, this Pok�mon must eat its way through the soil above. Until it does so, Larvitar cannot see its parents.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/246.png",
      "types": [
        "ground",
        "rock"
      ],
      "evolutions": [
        {
          "level": 30,
          "method": "level_up",
          "to": "Pupitar",
          "_id": "557a72cb7276d341b41ee157"
        }
      ]
    },
    {
      "_id": "557a72c87276d341b41ee102",
      "pkdx_id": 247,
      "national_id": 247,
      "name": "Pupitar",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/247.png",
      "description": "Pupitar creates a gas inside its body that it compresses and forcefully ejects to propel itself like a jet. The body is very durable�it avoids damage even if it hits solid steel.  Pupitar creates a gas inside its body that it compresses and forcefully ejects to propel itself like a jet. The body is very durable�it avoids damage even if it hits solid steel.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/247.png",
      "types": [
        "ground",
        "rock"
      ],
      "evolutions": [
        {
          "level": 55,
          "method": "level_up",
          "to": "Tyranitar",
          "_id": "557a72c87276d341b41ee103"
        }
      ]
    },
    {
      "_id": "557a72c97276d341b41ee11d",
      "pkdx_id": 248,
      "national_id": 248,
      "name": "Tyranitar",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/248.png",
      "description": "Tyranitar is so overwhelmingly powerful, it can bring down a whole mountain to make its nest. This Pok�mon wanders about in mountains seeking new opponents to fight.  Tyranitar is so overwhelmingly powerful, it can bring down a whole mountain to make its nest. This Pok�mon wanders about in mountains seeking new opponents to fight.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/248.png",
      "types": [
        "rock",
        "dark"
      ],
      "evolutions": [
        {
          "method": "other",
          "to": "Tyranitar-mega",
          "_id": "557a72c97276d341b41ee11e"
        }
      ]
    },
    {
      "_id": "557a72c97276d341b41ee119",
      "pkdx_id": 249,
      "national_id": 249,
      "name": "Lugia",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/249.png",
      "description": "Lugia's wings pack devastating power�a light fluttering of its wings can blow apart regular houses. As a result, this Pok�mon chooses to live out of sight deep under the sea.  Lugia's wings pack devastating power�a light fluttering of its wings can blow apart regular houses. As a result, this Pok�mon chooses to live out of sight deep under the sea.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/249.png",
      "types": [
        "flying",
        "psychic"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72c87276d341b41ee0f7",
      "pkdx_id": 250,
      "national_id": 250,
      "name": "Ho-oh",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/250.png",
      "description": "Ho-Oh's feathers glow in seven colors depending on the angle at which they are struck by light. These feathers are said to bring happiness to the bearers. This Pok�mon is said to live at the foot of a rainbow.  Ho-Oh's feathers glow in seven colors depending on the angle at which they are struck by light. These feathers are said to bring happiness to the bearers. This Pok�mon is said to live at the foot of a rainbow.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/250.png",
      "types": [
        "flying",
        "fire"
      ],
      "evolutions": []
    },
    {
      "_id": "557a72ca7276d341b41ee13a",
      "pkdx_id": 251,
      "national_id": 251,
      "name": "Celebi",
      "__v": 1,
      "image_url": "http://pokeapi.co/media/img/251.png",
      "description": "This Pok�mon came from the future by crossing over time. It is thought that so long as Celebi appears, a bright and shining future awaits us.  This Pok�mon came from the future by crossing over time. It is thought that so long as Celebi appears, a bright and shining future awaits us.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/251.png",
      "types": [
        "grass",
        "psychic"
      ],
      "evolutions": []
    }
  ]

  constructor() { }
}
