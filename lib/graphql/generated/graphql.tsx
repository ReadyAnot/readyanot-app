import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};



export type Log = {
  __typename?: 'Log';
  namespace: Scalars['String'];
  topic: Scalars['String'];
  data: Scalars['String'];
  createdAt: Scalars['DateTime'];
};

export type QuizQuestion = {
  __typename?: 'QuizQuestion';
  id: Scalars['ID'];
  content: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getAllLogs: Array<Log>;
  getQuizQuestions: Array<QuizQuestion>;
};

export type LogInput = {
  namespace: Scalars['String'];
  topic: Scalars['String'];
  data: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createLog: Scalars['Boolean'];
};


export type MutationCreateLogArgs = {
  input: LogInput;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type CreateLogMutationVariables = Exact<{
  input: LogInput;
}>;


export type CreateLogMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createLog'>
);

export type GetQuizQuestionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetQuizQuestionsQuery = (
  { __typename?: 'Query' }
  & { getQuizQuestions: Array<(
    { __typename?: 'QuizQuestion' }
    & Pick<QuizQuestion, 'id' | 'content'>
  )> }
);



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Log: ResolverTypeWrapper<Log>;
  String: ResolverTypeWrapper<Scalars['String']>;
  QuizQuestion: ResolverTypeWrapper<QuizQuestion>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Query: ResolverTypeWrapper<{}>;
  LogInput: LogInput;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CacheControlScope: CacheControlScope;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  DateTime: Scalars['DateTime'];
  Log: Log;
  String: Scalars['String'];
  QuizQuestion: QuizQuestion;
  ID: Scalars['ID'];
  Query: {};
  LogInput: LogInput;
  Mutation: {};
  Boolean: Scalars['Boolean'];
  Upload: Scalars['Upload'];
  Int: Scalars['Int'];
};

export type CacheControlDirectiveArgs = {   maxAge?: Maybe<Scalars['Int']>;
  scope?: Maybe<CacheControlScope>; };

export type CacheControlDirectiveResolver<Result, Parent, ContextType = any, Args = CacheControlDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type LogResolvers<ContextType = any, ParentType extends ResolversParentTypes['Log'] = ResolversParentTypes['Log']> = {
  namespace?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  topic?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  data?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QuizQuestionResolvers<ContextType = any, ParentType extends ResolversParentTypes['QuizQuestion'] = ResolversParentTypes['QuizQuestion']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAllLogs?: Resolver<Array<ResolversTypes['Log']>, ParentType, ContextType>;
  getQuizQuestions?: Resolver<Array<ResolversTypes['QuizQuestion']>, ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createLog?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCreateLogArgs, 'input'>>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type Resolvers<ContextType = any> = {
  DateTime?: GraphQLScalarType;
  Log?: LogResolvers<ContextType>;
  QuizQuestion?: QuizQuestionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Upload?: GraphQLScalarType;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
};


/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;

export const CreateLogDocument = gql`
    mutation createLog($input: LogInput!) {
  createLog(input: $input)
}
    `;
export type CreateLogMutationFn = Apollo.MutationFunction<CreateLogMutation, CreateLogMutationVariables>;

/**
 * __useCreateLogMutation__
 *
 * To run a mutation, you first call `useCreateLogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLogMutation, { data, loading, error }] = useCreateLogMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateLogMutation(baseOptions?: Apollo.MutationHookOptions<CreateLogMutation, CreateLogMutationVariables>) {
        return Apollo.useMutation<CreateLogMutation, CreateLogMutationVariables>(CreateLogDocument, baseOptions);
      }
export type CreateLogMutationHookResult = ReturnType<typeof useCreateLogMutation>;
export type CreateLogMutationResult = Apollo.MutationResult<CreateLogMutation>;
export type CreateLogMutationOptions = Apollo.BaseMutationOptions<CreateLogMutation, CreateLogMutationVariables>;
export const GetQuizQuestionsDocument = gql`
    query getQuizQuestions {
  getQuizQuestions {
    id
    content
  }
}
    `;

/**
 * __useGetQuizQuestionsQuery__
 *
 * To run a query within a React component, call `useGetQuizQuestionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuizQuestionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuizQuestionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetQuizQuestionsQuery(baseOptions?: Apollo.QueryHookOptions<GetQuizQuestionsQuery, GetQuizQuestionsQueryVariables>) {
        return Apollo.useQuery<GetQuizQuestionsQuery, GetQuizQuestionsQueryVariables>(GetQuizQuestionsDocument, baseOptions);
      }
export function useGetQuizQuestionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetQuizQuestionsQuery, GetQuizQuestionsQueryVariables>) {
          return Apollo.useLazyQuery<GetQuizQuestionsQuery, GetQuizQuestionsQueryVariables>(GetQuizQuestionsDocument, baseOptions);
        }
export type GetQuizQuestionsQueryHookResult = ReturnType<typeof useGetQuizQuestionsQuery>;
export type GetQuizQuestionsLazyQueryHookResult = ReturnType<typeof useGetQuizQuestionsLazyQuery>;
export type GetQuizQuestionsQueryResult = Apollo.QueryResult<GetQuizQuestionsQuery, GetQuizQuestionsQueryVariables>;