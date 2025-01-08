import {defineArrayMember, defineField, defineType} from 'sanity'

export const textAndDetailsWithImageType = defineType({
  name: 'textAndDetailsWithImage',
  type: 'object',
  title: 'Text and details with image',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    
    defineField({
      name: 'body',
      type: 'blockContent',
    }),  
    defineField({
      name: 'details',
      type: 'array',
      of: [
        defineArrayMember(
          {name: 'detail', type: 'string',}
            ),
      ]
    }),
    defineField({
      name: 'image',
      type: 'customImage',
    }),
  
  ],
})