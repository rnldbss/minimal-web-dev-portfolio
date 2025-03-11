# Sanity Schema Types

This directory contains all the schema definitions for the project. The schemas are organized into three categories:

## Directory Structure

### documents/

Contains the main content types that represent full documents in Sanity Studio. These are the primary data structures that define how content is organized and stored.

### plugins/

Custom field types and reusable schema configurations that can be embedded within other schemas.

### utils/

Utility schemas that provide base configurations and shared functionality used across multiple schemas. These are the foundational building blocks used throughout the project.

## Usage

All schemas are imported and exported through the `index.ts` file, the entry point for Sanity Studio configuration.

## Studio Structure

The content in Sanity Studio is organized using a custom desk structure (`deskStructure.js`) that provides a logical navigation hierarchy:

### Navigation

1. **Home** - Single document type for the home page
2. **Projects** - Nested structure with:
   - Projects age - Schema for the portfolio listing
   - Projects list - Orderable list of individual projects
3. **Contact** - Single document type for contact information

### Features

- Uses `@sanity/orderable-document-list` for drag-and-drop project ordering

## Usage

All schemas are imported and exported through the `index.ts` file, which serves as the entry point for Sanity Studio configuration. The desk structure (`deskStructure.js`) determines how these schemas are organized and displayed in the Sanity Studio interface.
