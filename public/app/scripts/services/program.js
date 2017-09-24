'use strict';

/**
 * @ngdoc service
 * @name publicApp.program
 * @description
 * # program
 * Factory in the publicApp.
 */
angular.module('publicApp')
  .factory('program', function ($http,$state) {
    // Service logic
    // ...
    var hymnList = [
      {Name: "The Morning Breaks",Number: 1}, 
      {Name: "The Spirit of God",Number: 2},  
      {Name: "Now Let Us Rejoice",Number: 3}, 
      {Name: "Truth Eternal",Number: 4},  
      {Name: "High on the Mountain Top",Number: 5}, 
      {Name: "Redeemer of Israel",Number: 6}, 
      {Name: "Israel, Israel, God Is Calling",Number: 7}, 
      {Name: "Awake and Arise",Number: 8},  
      {Name: "Come, Rejoice",Number: 9},  
      {Name: "Come, Sing to the Lord", Number: 10}, 
      {Name: "What Was Witnessed in the Heavens?", Number: 11},   
      {Name: "'Twas Witnessed in the Morning Sky",Number: 12},
      {Name: "An Angel from on High", Number: 13},  
      {Name: "Sweet Is the Peace the Gospel Brings", Number: 14},   
      {Name: "I Saw a Mighty Angel Fly", Number: 15}, 
      {Name: "What Glorious Scenes Mine Eyes Behold", Number: 16},  
      {Name: "Awake, Ye Saints of God, Awake!", Number: 17},  
      {Name: "The Voice of God Again Is Heard", Number: 18},  
      {Name: "We Thank Thee, O God, for a Prophet", Number: 19},  
      {Name: "God of Power, God of Right", Number: 20}, 
      {Name: "Come, Listen to a Prophet's Voice", Number: 21},  
      {Name: "We Listen to a Prophet's Voice", Number: 22}, 
      {Name: "We Ever Pray for Thee", Number: 23},  
      {Name: "God Bless Our Prophet Dear", Number: 24}, 
      {Name: "Now We'll Sing with One Accord", Number: 25}, 
      {Name: "Joseph Smith's First Prayer", Number: 26},  
      {Name: "Praise to the Man", Number: 27},  
      {Name: "Saints, Behold How Great Jehovah", Number: 28}, 
      {Name: "A Poor Wayfaring Man of Grief", Number: 29},  
      {Name: "Come, Come, Ye Saints", Number: 30},  
      {Name: "O God, Our Help in Ages Past", Number: 31}, 
      {Name: "The Happy Day at Last Has Come", Number: 32}, 
      {Name: "Our Mountain Home So Dear", Number: 33},  
      {Name: "O Ye Mountains High", Number: 34},  
      {Name: "For the Strength of the Hills", Number: 35},  
      {Name: "They, the Builders of the Nation", Number: 36}, 
      {Name: "The Wintry Day, Descending to Its Close", Number: 37},  
      {Name: "Come, All Ye Saints of Zion", Number: 38},  
      {Name: "O Saints of Zion", Number: 39}, 
      {Name: "Arise, O Glorious Zion", Number: 40}, 
      {Name: "Let Zion in Her Beauty Rise", Number: 41},  
      {Name: "Hail to the Brightness of Zion's Glad Morning!", Number: 42}, 
      {Name: "Zion Stands with Hills Surrounded", Number: 43},  
      {Name: "Beautiful Zion, Built Above", Number: 44},  
      {Name: "Lead Me into Life Eternal", Number: 45},  
      {Name: "Glorious Things of Thee Are Spoken", Number: 46}, 
      {Name: "We Will Sing of Zion", Number: 47}, 
      {Name: "Glorious Things Are Sung of Zion", Number: 48}, 
      {Name: "Adam-ondi-Ahman", Number: 49},  
      {Name: "Come, Thou Glorious Day of Promise", Number: 50}, 
      {Name: "Sons of Michael, He Approaches", Number: 51}, 
      {Name: "The Day Dawn Is Breaking", Number: 52}, 
      {Name: "Let Earth's Inhabitants Rejoice", Number: 53},  
      {Name: "Behold, the Mountain of the Lord", Number: 54},
      {Name: "Lo, the Mighty God Appearing!", Number: 55},  
      {Name: "Softly Beams the Sacred Dawning", Number: 56},  
      {Name: "We're Not Ashamed to Own Our Lord", Number: 57},  
      {Name: "Come, Ye Children of the Lord", Number: 58},  
      {Name: "Come, O Thou King of Kings", Number: 59}, 
      {Name: "Battle Hymn of the Republic", Number: 60},  
      {Name: "Raise Your Voices to the Lord", Number: 61},  
      {Name: "All Creatures of Our God and King", Number: 62},
      {Name: "Great King of Heaven", Number: 63}, 
      {Name: "On This Day of Joy and Gladness", Number: 64},  
      {Name: "Come, All Ye Saints Who Dwell on Earth", Number: 65}, 
      {Name: "Rejoice, the Lord Is King!", Number: 66}, 
      {Name: "Glory to God on High", Number: 67}, 
      {Name: "A Mighty Fortress Is Our God", Number: 68}, 
      {Name: "All Glory, Laud, and Honor", Number: 69}, 
      {Name: "Sing Praise to Him", Number: 70}, 
      {Name: "With Songs of Praise", Number: 71}, 
      {Name: "Praise to the Lord, the Almighty", Number: 72}, 
      {Name: "Praise the Lord with Heart and Voice", Number: 73}, 
      {Name: "Praise Ye the Lord", Number: 74}, 
      {Name: "In Hymns of Praise", Number: 75}, 
      {Name: "God of Our Fathers, We Come unto Thee", Number: 76},  
      {Name: "Great Is the Lord", Number: 77},  
      {Name: "God of Our Fathers, Whose Almighty Hand", Number: 78},  
      {Name: "With All the Power of Heart and Tongue", Number: 79}, 
      {Name: "God of Our Fathers, Known of Old", Number: 80}, 
      {Name: "Press Forward, Saints", Number: 81},  
      {Name: "For All the Saints", Number: 82},
      {Name: "Guide Us, O Thou Great Jehovah", Number: 83}, 
      {Name: "Faith of Our Fathers", Number: 84}, 
      {Name: "How Firm a Foundation", Number: 85},  
      {Name: "How Great Thou Art", Number: 86},
      {Name: "God Is Love", Number: 87},  
      {Name: "Great God, Attend While Zion Sings", Number: 88}, 
      {Name: "The Lord Is My Light", Number: 89}, 
      {Name: "From All That Dwell below the Skies", Number: 90},  
      {Name: "Father, Thy Children to Thee Now Raise", Number: 91}, 
      {Name: "For the Beauty of the Earth", Number: 92},  
      {Name: "Prayer of Thanksgiving", Number: 93}, 
      {Name: "Come, Ye Thankful People", Number: 94}, 
      {Name: "Now Thank We All Our God", Number: 95}, 
      {Name: "Dearest Children, God Is Near You", Number: 96},  
      {Name: "Lead, Kindly Light", Number: 97}, 
      {Name: "I Need Thee Every Hour", Number: 98}, 
      {Name: "Nearer, Dear Savior, to Thee", Number: 99}, 
      {Name: "Nearer, My God, to Thee", Number: 100}, 
      {Name: "Guide Me to Thee", Number: 101},  
      {Name: "Jesus, Lover of My Soul", Number: 102}, 
      {Name: "Precious Savior, Dear Redeemer", Number: 103},  
      {Name: "Jesus, Savior, Pilot Me", Number: 104}, 
      {Name: "Master, the Tempest Is Raging", Number: 105}, 
      {Name: "God Speed the Right", Number: 106}, 
      {Name: "Lord, Accept Our True Devotion", Number: 107},  
      {Name: "The Lord Is My Shepherd", Number: 108}, 
      {Name: "The Lord My Pasture Will Prepare", Number: 109},  
      {Name: "Cast Thy Burden upon the Lord", Number: 110}, 
      {Name: "Rock of Ages", Number: 111},  
      {Name: "Savior, Redeemer of My Soul", Number: 112}, 
      {Name: "Our Savior's Love", Number: 113}, 
      {Name: "Come unto Him", Number: 114}, 
      {Name: "Come, Ye Disconsolate", Number: 115}, 
      {Name: "Come, Follow Me", Number: 116}, 
      {Name: "Come unto Jesus", Number: 117}, 
      {Name: "Ye Simple Souls Who Stray", Number: 118}, 
      {Name: "Come, We That Love the Lord", Number: 119}, 
      {Name: "Lean on My Ample Arm", Number: 120},  
      {Name: "I'm a Pilgrim, I'm a Stranger", Number: 121}, 
      {Name: "Though Deepening Trials", Number: 122}, 
      {Name: "Oh, May My Soul Commune with Thee", Number: 123},   
      {Name: "Be Still, My Soul", Number: 124},
      {Name: "How Gentle God's Commands", Number: 125}, 
      {Name: "How Long, O Lord Most Holy and True", Number: 126}, 
      {Name: "Does the Journey Seem Long?", Number: 127}, 
      {Name: "When Faith Endures", Number: 128},  
      {Name: "Where Can I Turn for Peace?", Number: 129}, 
      {Name: "Be Thou Humble", Number: 130},  
      {Name: "More Holiness Give Me", Number: 131}, 
      {Name: "God Is in His Holy Temple", Number: 132}, 
      {Name: "Father in Heaven", Number: 133},  
      {Name: "I Believe in Christ", Number: 134}, 
      {Name: "My Redeemer Lives", Number: 135}, 
      {Name: "I Know That My Redeemer Lives", Number: 136}, 
      {Name: "Testimony", Number: 137}, 
      {Name: "Bless Our Fast, We Pray", Number: 138}, 
      {Name: "In Fasting We Approach Thee", Number: 139}, 
      {Name: "Did You Think to Pray?", Number: 140},  
      {Name: "Jesus, the Very Thought of Thee", Number: 141}, 
      {Name: "Sweet Hour of Prayer", Number: 142},  
      {Name: "Let the Holy Spirit Guide", Number: 143},
      {Name: "Secret Prayer", Number: 144}, 
      {Name: "Prayer Is the Soul's Sincere Desire", Number: 145}, 
      {Name: "Gently Raise the Sacred Strain", Number: 146},  
      {Name: "Sweet Is the Work", Number: 147}, 
      {Name: "Sabbath Day", Number: 148}, 
      {Name: "As the Dew from Heaven Distilling", Number: 149}, 
      {Name: "O Thou Kind and Gracious Father", Number: 150}, 
      {Name: "We Meet, Dear Lord", Number: 151},  
      {Name: "God Be with You Till We Meet Again", Number: 152},  
      {Name: "Lord, We Ask Thee Ere We Part", Number: 153}, 
      {Name: "Father, This Hour Has Been One of Joy", Number: 154}, 
      {Name: "We Have Partaken of Thy Love", Number: 155},  
      {Name: "Sing We Now at Parting", Number: 156},  
      {Name: "Thy Spirit, Lord, Has Stirred Our Souls", Number: 157}, 
      {Name: "Before Thee, Lord, I Bow My Head", Number: 158},  
      {Name: "Now the Day Is Over", Number: 159}, 
      {Name: "Softly Now the Light of Day", Number: 160}, 
      {Name: "The Lord Be with Us", Number: 161}, 
      {Name: "Lord, We Come before Thee Now", Number: 162}, 
      {Name: "Lord, Dismiss Us with Thy Blessing", Number: 163},  
      {Name: "Great God, to Thee My Evening Song", Number: 164},  
      {Name: "Abide with Me; 'Tis Eventide", Number: 165},  
      {Name: "Abide with Me!", Number: 166},  
      {Name: "Come, Let Us Sing an Evening Hymn", Number: 167}, 
      {Name: "As the Shadows Fall", Number: 168}, 
      {Name: "As Now We Take the Sacrament", Number: 169},  
      {Name: "God, Our Father, Hear Us Pray", Number: 170}, 
      {Name: "With Humble Heart", Number: 171}, 
      {Name: "In Humility, Our Savior", Number: 172}, 
      {Name: "While of These Emblems We Partake", Number: 173}, 
      {Name: "While of These Emblems We Partake", Number: 174}, 
      {Name: "O God, the Eternal Father", Number: 175}, 
      {Name: "'Tis Sweet to Sing the Matchless Love", Number: 176}, 
      {Name: "'Tis Sweet To Sing the Matchless Love", Number: 177}, 
      {Name: "O Lord of Hosts", Number: 178}, 
      {Name: "Again, Our Dear Redeeming Lord", Number: 179},  
      {Name: "Father in Heaven, We Do Believe", Number: 180}, 
      {Name: "Jesus of Nazareth, Savior and King", Number: 181},  
      {Name: "We'll Sing All Hail to Jesus' Name", Number: 182},  
      {Name: "In Remembrance of Thy Suffering", Number: 183}, 
      {Name: "Upon the Cross of Calvary", Number: 184}, 
      {Name: "Reverently and Meekly Now", Number: 185}, 
      {Name: "Again We Meet around the Board", Number: 186},  
      {Name: "God Loved Us, So He Sent His Son", Number: 187},  
      {Name: "Thy Will, O Lord, Be Done", Number: 188}, 
      {Name: "O Thou, Before the World Began", Number: 189},  
      {Name: "In Memory of the Crucified", Number: 190},  
      {Name: "Behold the Great Redeemer Die", Number: 191}, 
      {Name: "He Died! The Great Redeemer Died", Number: 192},  
      {Name: "I Stand All Amazed", Number: 193},  
      {Name: "There Is a Green Hill Far Away", Number: 194},  
      {Name: "How Great the Wisdom and the Love", Number: 195}, 
      {Name: "Jesus, Once of Humble Birth", Number: 196}, 
      {Name: "O Savior, Thou Who Wearest a Crown", Number: 197},  
      {Name: "That Easter Morn", Number: 198},  
      {Name: "He Is Risen!", Number: 199},  
      {Name: "Christ the Lord Is Risen Today", Number: 200},  
      {Name: "Joy to the World", Number: 201},  
      {Name: "Oh, Come, All Ye Faithful", Number: 202}, 
      {Name: "Angels We Have Heard on High", Number: 203},  
      {Name: "Silent Night", Number: 204},  
      {Name: "Once in Royal David's City", Number: 205},  
      {Name: "Away in a Manger", Number: 206},  
      {Name: "It Came upon the Midnight Clear", Number: 207}, 
      {Name: "O Little Town of Bethlehem", Number: 208},  
      {Name: "Hark! The Herald Angels Sing", Number: 209},  
      {Name: "With Wondering Awe", Number: 210},  
      {Name: "While Shepherds Watched Their Flocks", Number: 211},  
      {Name: "Far, Far Away on Judea's Plains", Number: 212}, 
      {Name: "The First Noel", Number: 213},  
      {Name: "I Heard the Bells on Christmas Day", Number: 214},  
      {Name: "Ring Out, Wild Bells", Number: 215},  
      {Name: "We Are Sowing", Number: 216}, 
      {Name: "Come, Let Us Anew", Number: 217}, 
      {Name: "We Give Thee But Thine Own", Number: 218},  
      {Name: "Because I Have Been Given Much", Number: 219},
      {Name: "Lord, I Would Follow Thee", Number: 220}, 
      {Name: "Dear to the Heart of the Shepherd", Number: 221}, 
      {Name: "Hear Thou Our Hymn, O Lord", Number: 222},  
      {Name: "Have I Done Any Good?", Number: 223}, 
      {Name: "I Have Work Enough to Do", Number: 224},  
      {Name: "We Are Marching On to Glory", Number: 225}, 
      {Name: "Improve the Shining Moments", Number: 226}, 
      {Name: "There Is Sunshine in My Soul Today", Number: 227},  
      {Name: "You Can Make the Pathway Bright", Number: 228}, 
      {Name: "Today, While the Sun Shines", Number: 229}, 
      {Name: "Scatter Sunshine", Number: 230},  
      {Name: "Father, Cheer Our Souls Tonight", Number: 231}, 
      {Name: "Let Us Oft Speak Kind Words", Number: 232}, 
      {Name: "Nay, Speak No Ill", Number: 233}, 
      {Name: "Jesus, Mighty King in Zion", Number: 234},  
      {Name: "Should You Feel Inclined to Censure", Number: 235}, 
      {Name: "Lord, Accept into Thy Kingdom", Number: 236}, 
      {Name: "Do What Is Right", Number: 237},  
      {Name: "Behold Thy Sons and Daughters, Lord", Number: 238}, 
      {Name: "Choose the Right", Number: 239},  
      {Name: "Know This, That Every Soul Is Free", Number: 240},  
      {Name: "Count Your Blessings", Number: 241},  
      {Name: "Praise God, from Whom All Blessings Flow", Number: 242},  
      {Name: "Let Us All Press On", Number: 243}, 
      {Name: "Come Along, Come Along", Number: 244},  
      {Name: "This House We Dedicate to Thee", Number: 245},  
      {Name: "Onward, Christian Soldiers", Number: 246},  
      {Name: "We Love Thy House, O God", Number: 247},  
      {Name: "Up, Awake, Ye Defenders of Zion", Number: 248}, 
      {Name: "Called to Serve", Number: 249}, 
      {Name: "We Are All Enlisted", Number: 250}, 
      {Name: "Behold! A Royal Army", Number: 251},  
      {Name: "Put Your Shoulder to the Wheel", Number: 252},  
      {Name: "Like Ten Thousand Legions Marching", Number: 253},  
      {Name: "True to the Faith", Number: 254}, 
      {Name: "Carry On", Number: 255},  
      {Name: "As Zion's Youth in Latter Days", Number: 256},  
      {Name: "Rejoice! A Glorious Sound Is Heard", Number: 257},  
      {Name: "O Thou Rock of Our Salvation", Number: 258},  
      {Name: "Hope of Israel", Number: 259},  
      {Name: "Who's on the Lord's Side?", Number: 260}, 
      {Name: "Thy Servants Are Prepared", Number: 261}, 
      {Name: "Go, Ye Messengers of Glory", Number: 262},  
      {Name: "Go Forth with Faith", Number: 263}, 
      {Name: "Hark, All Ye Nations!", Number: 264}, 
      {Name: "Arise, O God, and Shine", Number: 265}, 
      {Name: "The Time Is Far Spent", Number: 266}, 
      {Name: "How Wondrous and Great", Number: 267},  
      {Name: "Come, All Whose Souls Are Lighted", Number: 268}, 
      {Name: "Jehovah, Lord of Heaven and Earth", Number: 269}, 
      {Name: "I'll Go Where You Want Me to Go", Number: 270}, 
      {Name: "Oh, Holy Words of Truth and Love", Number: 271},  
      {Name: "Oh Say, What Is Truth?", Number: 272},  
      {Name: "Truth Reflects upon Our Senses", Number: 273},  
      {Name: "The Iron Rod", Number: 274},  
      {Name: "Men Are That They Might Have Joy", Number: 275},  
      {Name: "Come Away to the Sunday School", Number: 276},  
      {Name: "As I Search the Holy Scriptures", Number: 277}, 
      {Name: "Thanks for the Sabbath School", Number: 278}, 
      {Name: "Thy Holy Word", Number: 279}, 
      {Name: "Welcome, Welcome, Sabbath Morning", Number: 280}, 
      {Name: "Help Me Teach with Inspiration", Number: 281},  
      {Name: "We Meet Again in Sabbath School", Number: 282}, 
      {Name: "The Glorious Gospel Light Has Shone", Number: 283},   
      {Name: "If You Could Hie to Kolob", Number: 284},
      {Name: "God Moves in a Mysterious Way", Number: 285}, 
      {Name: "Oh, What Songs of the Heart", Number: 286}, 
      {Name: "Rise, Ye Saints, and Temples Enter", Number: 287},  
      {Name: "How Beautiful Thy Temples, Lord", Number: 288}, 
      {Name: "Holy Temples on Mount Zion", Number: 289},  
      {Name: "Rejoice, Ye Saints of Latter Days", Number: 290}, 
      {Name: "Turn Your Hearts", Number: 291},  
      {Name: "O My Father", Number: 292}, 
      {Name: "Each Life That Touches Ours for Good", Number: 293},  
      {Name: "Love at Home", Number: 294},  
      {Name: "O Love That Glorifies the Son", Number: 295}, 
      {Name: "Our Father, by Whose Name", Number: 296}, 
      {Name: "From Homes of Saints Glad Songs Arise", Number: 297}, 
      {Name: "Home Can Be a Heaven on Earth", Number: 298},   
      {Name: "Children of Our Heavenly Father", Number: 299},
      {Name: "Families Can Be Together Forever", Number: 300},  
      {Name: "I Am a Child of God", Number: 301}, 
      {Name: "I Know My Father Lives", Number: 302},  
      {Name: "Keep the Commandments", Number: 303}, 
      {Name: "Teach Me to Walk in the Light", Number: 304}, 
      {Name: "The Light Divine", Number: 305},  
      {Name: "God's Daily Care", Number: 306},  
      {Name: "In Our Lovely Deseret", Number: 307}, 
      {Name: "Love One Another", Number: 308},  
      {Name: "As Sisters in Zion (Women)", Number: 309},  
      {Name: "A Key Was Turned in Latter Days (Women)", Number: 310}, 
      {Name: "We Meet Again as Sisters (Women)", Number: 311},  
      {Name: "We Ever Pray for Thee (Women)", Number: 312}, 
      {Name: "God Is Love (Women)", Number: 313}, 
      {Name: "How Gentle God's Commands (Women)", Number: 314}, 
      {Name: "Jesus, the Very Thought of Thee (Women)", Number: 315}, 
      {Name: "The Lord Is My Shepherd (Women)", Number: 316}, 
      {Name: "Sweet Is the Work (Women)", Number: 317}, 
      {Name: "Love at Home (Women)", Number: 318},  
      {Name: "Ye Elders of Israel (Men)", Number: 319}, 
      {Name: "The Priesthood of Our Lord (Men)", Number: 320},  
      {Name: "Ye Who Are Called to Labor (Men)", Number: 321},  
      {Name: "Come, All Ye Sons of God (Men)", Number: 322},  
      {Name: "Rise Up, O Men of God (Men's Choir)", Number: 323}, 
      {Name: "Rise Up, O Men of God (Men)", Number: 324}, 
      {Name: "See the Mighty Priesthood Gathered (Men's Choir)", Number: 325},  
      {Name: "Come, Come, Ye Saints (Men's Choir)", Number: 326}, 
      {Name: "Go, Ye Messengers of Heaven (Men's Choir)", Number: 327}, 
      {Name: "An Angel from on High", Number: 328}, 
      {Name: "Thy Servants Are Prepared (Men's Choir)", Number: 329}, 
      {Name: "See, the Mighty Angel Flying (Men's Choir)", Number: 330},  
      {Name: "Oh Say, What Is Truth? (Men's Choir)", Number: 331},  
      {Name: "Come, O Thou King of Kings (Men's Choir)", Number: 332},  
      {Name: "High on the Mountain Top (Men's Choir)", Number: 333},  
      {Name: "I Need Thee Every Hour (Men's Choir)", Number: 334},  
      {Name: "Brightly Beams Our Father's Mercy (Men's Choir)", Number: 335}, 
      {Name: "School Thy Feelings (Men's Choir)", Number: 336}, 
      {Name: "O Home Beloved (Men's Choir)", Number: 337},  
      {Name: "America the Beautiful", Number: 338}, 
      {Name: "My Country, 'Tis of Thee", Number: 339},  
      {Name: "The Star-Spangled Banner", Number: 340},  
      {Name: "God Save the King", Number: 341}
    ]
    var copied = false;
    var server = 'http://127.0.0.1:9000';
    var curProgram = 0;
    var programs = {
      programs:[],
      leadership:[]
    }

    // Public API here
    return {
      postProgram: function (program) {
        if(program._id == undefined){
          $http.post(server + '/program', program).then(function(res){
          })
        }
        else{
          $http.post(server + '/updateprogram', program).then(function(res){
          })
        }
      },
      postLeadership: function(leadership){
        $http.post(server +'/leadership', leadership).then(function(res) {
          console.log("leadership:" + res.data)
          curLeadership = res.data;
        })
      },
      findPrograms:function(){
        $http.get(server+'/findprograms').then(function(res){
          programs.programs = []
          for(var i = 0; i < res.data.length; i++){
            res.data[i].date = new Date(res.data[i].date)
            programs.allPrograms.push(res.data[i])

          }
        })
        return programs

      },
      getPrograms: function(){
        $http.get(server+'/programs').then(function(res){
          programs.programs = []
          for(var i = 0; i < res.data.length; i++){
            res.data[i].date = new Date(res.data[i].date)
            programs.programs.push(res.data[i])

          }
        })
        return programs
      },
      setProgram:function(index){
        //should copy over data from most recent program into curProgram
        if(index != undefined){
          if(programs.programs[index] != undefined){
            curProgram = index          }
        }
        else{
          curProgram = programs.programs.length
        }
        $state.go('home.setup')
      },
      getProgram:function(index){
        if(curProgram < programs.programs.length && !copied) 
          return programs.programs[curProgram];
        else{
          copied = false
          if(programs.programs.length > 0){
            if(index == undefined)
              index = 0
            var prog = {}
            prog.ward = programs.programs[index].ward
            prog.presiding = programs.programs[index].presiding
            prog.conducting = programs.programs[index].conducting
            prog.organist = programs.programs[index].organist
            prog.chorister = programs.programs[index].chorister
            prog.image = {}
            prog.image.name = programs.programs[index].image.name
            prog.image.source = programs.programs[index].image.source
            prog.image.fact = programs.programs[index].image.fact

            prog.sAnnouncements = []
            prog.sReminders = []
            prog.reminders = []
            prog.announcements = []

            for(var i = 0; i < programs.programs[index].reminders.length; i++){
              prog.reminders.push({
                title:programs[index].reminders[i].title,
                data:[]
              })
              for(var j = 0; j < programs.programs[index].reminders[i].data.length; j++){
                prog.reminders[i].data.push({
                  name:programs[index].reminders[i].data[j].name,
                  info:programs[index].reminders[i].data[j].info
                })
              }
            }
            for(var i = 0; i < programs.programs[index].sReminders.length; i++){
              prog.sReminders.push({
                name:programs[index].sReminders[i].name
              })
            }
            for(var i = 0; i < programs.programs[index].announcements.length; i++){
              prog.announcements.push({
                name:programs[index].announcements[i].name,
                data:programs[index].announcements[i].data
              })
            }
            for(var i = 0; i < programs.programs[index].sAnnouncements.length; i++){
              prog.sAnnouncements.push({
                name:programs[index].sAnnouncements[i].name
              })
            }
            return prog
          }
          else
            return {}
        }

      },
      getLeadership:function(){
        $http.get(server + '/leadership').then(function(res){
          programs.leadership = []
          console.log(res.data)
          for(var i = 0; i < res.data.length; i++){
            programs.leadership.push(res.data[i])
          }
        })
        console.log(programs.leadership)
        return programs
      },
      updateLeadership:function(leadershp){
        $http.post(server + '/leadership', leadershp).then(function(res){
          console.log(res.data)
        })
      },
      copy:function(){
        copied = true
        return curProgram
      },
      canCopy:function(){
        if(programs.programs[curProgram]._id == undefined){
          return false
        }
        else
          return true
      },
      getHymnName:function(number){

        return hymnList[number].Name
      },
      printView:function() {
        $state.go('home.print')
      }
    };
  });
