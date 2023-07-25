using Lexigoal.MVVM.Model.Types;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using CM = System.Configuration.ConfigurationManager;

namespace Lexigoal.MVVM.Model.DAL
{
	public class DataAccess
	{

		public DataTable Execute(string cmdText, List<ParmStruct> parms = null, CommandType cmdType = CommandType.StoredProcedure)
		{
			DataTable dt = new DataTable();
			SqlCommand cmd = CreateCommand(cmdText, cmdType, parms);

			using (cmd.Connection)
			{
				SqlDataAdapter da = new SqlDataAdapter(cmd);
				da.Fill(dt);
			}
			return dt;
		}

		public async Task<DataTable> ExecuteAsync(string cmdText, List<ParmStruct>? parms = null, CommandType cmdType = CommandType.StoredProcedure)
		{
			DataTable dt = new();
			SqlCommand cmd = CreateCommand(cmdText, cmdType, parms);

			using (cmd.Connection)
			{
				SqlDataAdapter da = new(cmd);

				await Task.Run(() => da.Fill(dt));
			}

			return dt;
		}

		private SqlCommand CreateCommand(string cmdText, CommandType cmdType, List<ParmStruct> parms)
		{
			string connectionString = CM.ConnectionStrings["CapstoneEchoConnStr"].ConnectionString;

			SqlConnection conn = new SqlConnection(connectionString);

			SqlCommand cmd = new SqlCommand(SQLCleaner(cmdText), conn);
			cmd.CommandType = cmdType;

			if (parms != null)
			{
				foreach (ParmStruct p in parms)
				{
					//cmd.Parameters.Add(p);
					cmd.Parameters.Add(p.Name, p.DataType, p.Size).Value = p.Value;
					cmd.Parameters[p.Name].Direction = p.Direction;

				}
			}

			return cmd;
		}

		private string SQLCleaner(string sql)
		{
			while (sql.Contains("  "))
				sql = sql.Replace("  ", " ");

			return sql.Replace(Environment.NewLine, "");
		}

		public int ExecuteNonQuery(string cmdText, List<ParmStruct> parms = null, CommandType cmdType = CommandType.StoredProcedure)
		{
			int rowsAffected = 0;
			SqlCommand cmd = CreateCommand(cmdText, cmdType, parms);

			using (cmd.Connection)
			{
				cmd.Connection.Open();
				rowsAffected = cmd.ExecuteNonQuery();

				UnloadParameters(parms, cmd);
			}

			return rowsAffected;
		}

		public object ExecuteScalar(string cmdText, List<ParmStruct> parms = null, CommandType cmdType = CommandType.StoredProcedure)
		{
			object retVal;
			SqlCommand cmd = CreateCommand(cmdText, cmdType, parms);

			using (cmd.Connection)
			{
				cmd.Connection.Open();
				retVal = cmd.ExecuteScalar();
			}

			return retVal;
		}

		private void UnloadParameters(List<ParmStruct> parms, SqlCommand cmd)
		{
			if (parms != null)
			{

				for (int i = 0; i < parms.Count; i++)
				{
					ParmStruct p = parms[i];
					p.Value = cmd.Parameters[p.Name].Value;
					parms[i] = p;
				}
			}
		}
	}
}
