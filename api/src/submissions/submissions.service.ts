import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Pool } from 'pg';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class SubmissionsService {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432'),
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'teamverse',
    });
    this.init();
  }

  /**
   * Initializes the submissions table if it does not exist.
   */
  async init() {
    try {
      await this.pool.query(`
        CREATE TABLE IF NOT EXISTS submissions (
          id SERIAL PRIMARY KEY,
          statements TEXT[] NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);
      console.log('Submissions table is ready.');
    } catch (err) {
      console.error('Error creating submissions table:', err);
    }
  }

  /**
   * Creates a new submission record.
   * @param statements - An array of exactly three strings.
   */
  async createSubmission(statements: string[]): Promise<any> {
    try {
      const result = await this.pool.query(
        'INSERT INTO submissions (statements) VALUES ($1) RETURNING *',
        [statements],
      );
      return result.rows[0];
    } catch (err) {
      throw new InternalServerErrorException('Error storing submission');
    }
  }

  /**
   * Retrieves all submissions, ordered by creation date (latest first).
   */
  async getSubmissions(): Promise<any[]> {
    try {
      const result = await this.pool.query(
        'SELECT * FROM submissions ORDER BY created_at DESC'
      );
      return result.rows;
    } catch (err) {
      throw new InternalServerErrorException('Error retrieving submissions');
    }
  }
}
