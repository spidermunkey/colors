The Purpose and Functionality of this application is to 
reduce the vast array of colors in all of their 
variations into one appliction.

In doing so I aim to quickly and effectively intergrate 
color into any future web application with a keen 
understanding that allows for a smooth workflow.

I understand that there are already various tools,
resources, and software in the wild that already 
accomplishes this very task however, in doing so
myself I hope to strengthen my knowledge of computer
science techniques such as, working with and manipulating
strings, buffers, and arrays, along with the various ways
these elements are handled through API's and Databases.

The idea came from my earliest years in web development. Creating Layouts and adding elements to a page was cool but I found that even with a perfectly structured, fully functional web page something about not have the right colors in play made anything I made jarring, and embarassing to look at. From then on, whenever I looked at a web page, video, picture, tutorial, the thing I always paid most attention to and dug deeper into studying was the use of colors.

----------------------------------------------------

Core Functionality
**********************************************************
    Scaffolding Color Variations by Hue
    -----------------------------------
        Blue {
            True Blue: ""
            Derivative: none;
            Range: [],
            Collection: [],
            Favorites: [],
            Shades: [],
            Tints: [],
            Tones: [],
            Gradients: [],

            Combos: {
                Complementary: [],
                Analogous: [],
                Triadic: [],
                Custom: [],
            }
        }
********************************************************    
    Storing and Organizing Common Color Values
    ------------------------------------------
        class Color {
            "PerriWinkle" {
                
                Derivative: "blue",
                Tone: "pastel",
                Tags: []
                
                isFavorite: True,
                timesCollected: 4,
                timesCopied: 8,

                Value: {
                    RGB: => #e92efb = [e9,2e,fb] => 
                                                    [[14,9],[2,14],[16,11]] =>
                                                                                 [[(14*16) + (9*1)],[(2*16) + (14*1)], [(16*16) + (11*1)]]
                                                                                                                                            => [233,46,251]
                    HEX:
                    HSL:
                }

                Alias: {
                    css: "--blue_Periwinlke",
                    name: "Periwinkle",

                    set name() {

                    }
                    set cssAlias() {

                    }

                    get() {
                        [name,alias]
                    }
                }
                
                getAnalogous(num,factor) {
                    
                }

                getComplement(num,factor) {

                }

                get Triads(factor) {

                }

                get Shades(num,factor) {

                }

                get Tints(num,factor) {

                }

                get Tones(num,factor) {

                }

                get Variable(format,...values,utility) {
                    
                }
            }
        }
**********************************************************
    Managing Chunks and Preferences
    -------------------------------
    
    class ColorStore {
        group byRange(range) {

        }

        group byTone(tone) {

        }

        group byTag(...tags) {

        }

        group byFrequency(order) {

        }

        group byPreference() {

        }

        group byProject() {

        }

        get(group) {

        }
        
        set(group) {

        }
    }

*********************************************************
    Scaffolding and Creating Design Systems
    ---------------------------------------

    class DesignSystem {
        
        primary:
        secondary:
        tertiary:
        etcetiary: []
        accents: []
 
        focus:
        engage:
        blur: 

        success: []
        danger: []
        warn: []
        notify: []

        greyScales: []

        Text: {

        }

        Fill: {

        }

        Border: {

        }

        Shadow: {

        }

        mixer(hue,factor) {
            // getShades && Tints
        }

        harmonizer(ranges,...factors)

        gradient(factor,...colors) {

        }
        
    }


****************************************************

    Future Implementations

    Importing or Scraping Color & Design Systems
    --------------------------------------------

    Importing or Exporting Custome Design Systems
    --------------------------------------------

    @export
    @import = {
        Sass
        Node
        WebPack
        PHP
        Perl
        Rust
        Lua
    }