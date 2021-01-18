(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{597:function(t,e,a){"use strict";a.r(e);var s=a(45),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"renderabc-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#renderabc-options"}},[t._v("#")]),t._v(" RenderAbc options")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("renderAbc()")]),t._v(" call has a third parameter that is a list of options. It is not required. Any option that is not recognized is silently ignored. For example:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callbackFn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("renderAbc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"paper"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" abcString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" add_classes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" clickListener"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" callbackFn "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"add-classes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-classes"}},[t._v("#")]),t._v(" add_classes")]),t._v(" "),a("p",[t._v("Default: false")]),t._v(" "),a("p",[t._v("If true, then each element that is drawn on the SVG will have an identifying class with it that you can use to style, move, or hide the element. See the section on classes for more details.")]),t._v(" "),a("h2",{attrs:{id:"afterparsing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#afterparsing"}},[t._v("#")]),t._v(" afterParsing")]),t._v(" "),a("p",[t._v("Default: undefined")]),t._v(" "),a("p",[t._v(":::")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Volatile")]),t._v(" "),a("p",[t._v("The contents of this is subject to change so if you use this function you will need to retest it whenever upgrading abcjs.")])]),t._v(" "),a("p",[t._v("Callback function. If this is present then it is called right after the ABC string is parsed and before the music has started to display or be set up for audio.")]),t._v(" "),a("p",[t._v("This is useful if there is an extension to the parsing that you want to add.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("afterParsing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("tune"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tuneNumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" abcString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[a("p",[t._v("tune:\nThe object that is passed to both the renderer and the audio creator.")])]),t._v(" "),a("li",[a("p",[t._v("tuneNumber:\nZero-based number of the tune. Useful if the abcstring contains more than one tune.")])]),t._v(" "),a("li",[a("p",[t._v("abcString:\nThe original string that was passed in.")])])]),t._v(" "),a("h2",{attrs:{id:"clicklistener"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clicklistener"}},[t._v("#")]),t._v(" clickListener")]),t._v(" "),a("p",[t._v("Default: null")]),t._v(" "),a("p",[t._v("Callback function. The signature of the function is: "),a("code",[t._v("function(abcelem, tuneNumber, classes, analysis, drag) {}")]),t._v(".")]),t._v(" "),a("p",[t._v("This is called whenever the user clicks on a note or selects a series of notes. For more details, see the page on the click listener.")]),t._v(" "),a("h2",{attrs:{id:"dragcolor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dragcolor"}},[t._v("#")]),t._v(" dragColor")]),t._v(" "),a("p",[t._v("Default: same as selectionColor")]),t._v(" "),a("p",[t._v("This is the color of the elements currently being dragged.")]),t._v(" "),a("h2",{attrs:{id:"dragging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dragging"}},[t._v("#")]),t._v(" dragging")]),t._v(" "),a("p",[t._v("See the "),a("RouterLink",{attrs:{to:"/visual/dragging.html"}},[t._v("dragging page")]),t._v(" for more information.")],1),t._v(" "),a("h2",{attrs:{id:"foregroundcolor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#foregroundcolor"}},[t._v("#")]),t._v(" foregroundColor")]),t._v(" "),a("p",[t._v("Default: currentColor")]),t._v(" "),a("p",[t._v("This sets the color of everything displayed. This can be overridden in CSS for particular elements. This color is applied to "),a("code",[t._v("fill")]),t._v(" and "),a("code",[t._v("stroke")]),t._v(" attributes.")]),t._v(" "),a("h2",{attrs:{id:"format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#format"}},[t._v("#")]),t._v(" format")]),t._v(" "),a("p",[t._v("Default: undefined")]),t._v(" "),a("p",[t._v("An object of any of the visual formatting options that can be specified with the "),a("code",[t._v("%%option")]),t._v(" syntax in an ABC string.")]),t._v(" "),a("p",[t._v("For instance:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("renderAbc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"paper"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X:1\\netc..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  format"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    gchordfont"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Verdana 20"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    partsbox"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"hint-measures"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hint-measures"}},[t._v("#")]),t._v(" hint_measures")]),t._v(" "),a("p",[t._v("Default: false")]),t._v(" "),a("p",[t._v("Repeat the next measure at the end of the previous line, with a unique css class.")]),t._v(" "),a("h2",{attrs:{id:"linebreaks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linebreaks"}},[t._v("#")]),t._v(" lineBreaks")]),t._v(" "),a("p",[t._v("Default: undefined")]),t._v(" "),a("p",[t._v("If you want to control exactly which measures are on each line, then you can pass this in. It is an array of numbers that represent the right-most measure number on a line (1-based). That is, if the first numbers passed are "),a("code",[t._v("[ 3, 5, ...")]),t._v(" then the first line will have measures 1, 2, and 3 and the second line will have measures 4 and 5.")]),t._v(" "),a("p",[t._v("This parameter is primarily for the wrap mechanism to call internally, but it can be passed in if you have your own wrapping mechanism.")]),t._v(" "),a("h2",{attrs:{id:"minpadding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#minpadding"}},[t._v("#")]),t._v(" minPadding")]),t._v(" "),a("p",[t._v("Default: 0")]),t._v(" "),a("p",[t._v("The number of pixels that are added to the left of each staff item. This is not added to the fixed items at the beginning of the line (that is, clef, time signature and key signature) but is added to all other elements on the line. If the line is overly crowded the notes can't get any closer than this.")]),t._v(" "),a("h2",{attrs:{id:"onesvgperline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#onesvgperline"}},[t._v("#")]),t._v(" oneSvgPerLine")]),t._v(" "),a("p",[t._v("Default: false")]),t._v(" "),a("p",[t._v("Should each system of staves be rendered to a different SVG? This makes controlling with CSS easier, and makes it possible to paginate cleanly.")]),t._v(" "),a("h2",{attrs:{id:"paddingbottom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#paddingbottom"}},[t._v("#")]),t._v(" paddingbottom")]),t._v(" "),a("p",[t._v("Default: 30")]),t._v(" "),a("p",[t._v("The spacing that the music should have on the web page. This is in pixels.")]),t._v(" "),a("h2",{attrs:{id:"paddingleft"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#paddingleft"}},[t._v("#")]),t._v(" paddingleft")]),t._v(" "),a("p",[t._v("Default: 15")]),t._v(" "),a("p",[t._v("The spacing that the music should have on the web page. This is in pixels.")]),t._v(" "),a("h2",{attrs:{id:"paddingright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#paddingright"}},[t._v("#")]),t._v(" paddingright")]),t._v(" "),a("p",[t._v("Default: 50")]),t._v(" "),a("p",[t._v("The spacing that the music should have on the web page. This is in pixels.")]),t._v(" "),a("h2",{attrs:{id:"paddingtop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#paddingtop"}},[t._v("#")]),t._v(" paddingtop")]),t._v(" "),a("p",[t._v("Default: 15")]),t._v(" "),a("p",[t._v("The spacing that the music should have on the web page. This is in pixels.")]),t._v(" "),a("h2",{attrs:{id:"print"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#print"}},[t._v("#")]),t._v(" print")]),t._v(" "),a("p",[t._v("Default: false")]),t._v(" "),a("p",[t._v("Pay attention to margins and other formatting commands that don't make sense in a web page. This will display the header and footer, if specified, and try to lay out the music so that it can be printed cleanly.")]),t._v(" "),a("h2",{attrs:{id:"responsive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#responsive"}},[t._v("#")]),t._v(" responsive")]),t._v(" "),a("p",[t._v("Default: undefined")]),t._v(" "),a("p",[t._v("The strategy for responsiveness. The only option currently is "),a("code",[t._v('"resize"')]),t._v(" which will make the svg take up whatever width is available for the container. For example:")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 400px")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("paper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("renderAbc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"paper"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" abcString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" responsive"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"resize"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("This will scale the music down to fit in 400px, no matter what the original size was.")]),t._v(" "),a("p",[t._v("If you leave the width off and let the containing div change width with the browser width, you can see the music change size to accommodate changes in the browser width.")]),t._v(" "),a("p",[t._v("Note: a different strategy is the "),a("code",[t._v("wrap")]),t._v(" parameter which changes the number of measures on a line depending on space. See the wrap section for details.")]),t._v(" "),a("h2",{attrs:{id:"scale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scale"}},[t._v("#")]),t._v(" scale")]),t._v(" "),a("p",[t._v("Default: 1")]),t._v(" "),a("p",[t._v("If the number passed is between zero and one, then the music is printed smaller, if above one, then it is printed bigger.")]),t._v(" "),a("h2",{attrs:{id:"scrollhorizontal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scrollhorizontal"}},[t._v("#")]),t._v(" scrollHorizontal")]),t._v(" "),a("p",[t._v("Default: false")]),t._v(" "),a("p",[t._v("Should there be a horizontal scrollbar if the music is wider than the viewport? (requires "),a("code",[t._v("viewportHorizontal")]),t._v(" to be true.)")]),t._v(" "),a("h2",{attrs:{id:"selectioncolor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#selectioncolor"}},[t._v("#")]),t._v(" selectionColor")]),t._v(" "),a("p",[t._v('Default: "#ff0000"')]),t._v(" "),a("p",[t._v("This is the color of the note that the user has most recently clicked.")]),t._v(" "),a("h2",{attrs:{id:"selecttypes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#selecttypes"}},[t._v("#")]),t._v(" selectTypes")]),t._v(" "),a("p",[t._v("See the "),a("RouterLink",{attrs:{to:"/visual/dragging.html"}},[t._v("dragging page")]),t._v(" for more information.")],1),t._v(" "),a("h2",{attrs:{id:"showdebug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#showdebug"}},[t._v("#")]),t._v(" showDebug")]),t._v(" "),a("p",[t._v("Default: []")]),t._v(" "),a("p",[t._v("This is an array of the types of debug information. It can be:")]),t._v(" "),a("h3",{attrs:{id:"grid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grid"}},[t._v("#")]),t._v(" 'grid'")]),t._v(" "),a("p",[t._v("This prints out lines showing where various parts of the music are calculated.")]),t._v(" "),a("h3",{attrs:{id:"box"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#box"}},[t._v("#")]),t._v(" 'box'")]),t._v(" "),a("p",[t._v("This prints a shaded box for each element. If you see elements either too far apart or too close together this will give you an idea of what is causing it.")]),t._v(" "),a("h2",{attrs:{id:"staffwidth"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#staffwidth"}},[t._v("#")]),t._v(" staffwidth")]),t._v(" "),a("p",[t._v("Default: 740")]),t._v(" "),a("p",[t._v("This is the width in pixels of the layout. It won't change where things are laid out, it will just change the amount of spacing between elements.")]),t._v(" "),a("h2",{attrs:{id:"startingtune"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#startingtune"}},[t._v("#")]),t._v(" startingTune")]),t._v(" "),a("p",[t._v("Default: 0")]),t._v(" "),a("p",[t._v("The index of the tune in the tunebook to render (starting at zero for the first tune). This is only relevant if the abc string that is passed in contains multiple tunes.")]),t._v(" "),a("h2",{attrs:{id:"textboxpadding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#textboxpadding"}},[t._v("#")]),t._v(" textboxpadding")]),t._v(" "),a("p",[t._v("Default: 0.10")]),t._v(" "),a("p",[t._v("What percentage of the font size should the box that is drawn around the font be padded by?")]),t._v(" "),a("h2",{attrs:{id:"viewporthorizontal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#viewporthorizontal"}},[t._v("#")]),t._v(" viewportHorizontal")]),t._v(" "),a("p",[t._v("Default: false")]),t._v(" "),a("p",[t._v("Should the horizontal width be limited by the device's width?")]),t._v(" "),a("h2",{attrs:{id:"viewportvertical"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#viewportvertical"}},[t._v("#")]),t._v(" viewportVertical")]),t._v(" "),a("p",[t._v("Default: false")]),t._v(" "),a("h2",{attrs:{id:"visualtranspose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#visualtranspose"}},[t._v("#")]),t._v(" visualTranspose")]),t._v(" "),a("p",[t._v("Default: 0")]),t._v(" "),a("p",[t._v("Transposes the written music by the number of half-steps passed. Use a negative number to transpose down in pitch.")]),t._v(" "),a("h2",{attrs:{id:"wrap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wrap"}},[t._v("#")]),t._v(" wrap")]),t._v(" "),a("p",[t._v("Default: null")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("staffwidth")]),t._v(" "),a("p",[t._v("NOTE: this requires the parameter "),a("code",[t._v("staffwidth")]),t._v(" to be set!")])]),t._v(" "),a("p",[t._v("To have the parser ignore the line breaks, and figure out the line breaks based on the size of each measure.")]),t._v(" "),a("p",[t._v("This is an object of:")]),t._v(" "),a("p",[a("code",[t._v("preferredMeasuresPerLine")]),t._v(": How many measures per line if there is room. If there isn't room, then use the rest of the parameters. This is optional.")]),t._v(" "),a("p",[a("code",[t._v("minSpacing")]),t._v(": 1 means to pack the notes as close as possible, 2 means to double the spacing, etc..")]),t._v(" "),a("p",[a("code",[t._v("maxSpacing")]),t._v(": if there is very little music and a wide line, then the line is shortened so the notes are not too spread out.")]),t._v(" "),a("p",[a("code",[t._v("lastLineLimit")]),t._v(": if it works out that there is a single measure on the last line, then try a different layout.")]),t._v(" "),a("p",[a("code",[t._v("minSpacing")]),t._v(" values until the last line is no more spread out than this limit.")]),t._v(" "),a("p",[t._v("A reasonable thing to set these values to is "),a("code",[t._v("{ minSpacing: 1.8, maxSpacing: 2.7, preferredMeasuresPerLine: 4 }")]),t._v(".")])])}),[],!1,null,null,null);e.default=n.exports}}]);